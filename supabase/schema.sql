-- ============================================================
-- PrecisionLab — Skema database katalog layanan & tarif
-- Jalankan di Supabase Dashboard > SQL Editor > New Query
-- ============================================================

create table if not exists public.katalog_layanan (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  full_name text,
  description text,
  method text,
  matrix text,
  tat text not null default '3 Hari Kerja',
  price numeric(14,2) not null default 0 check (price >= 0),
  category text not null default 'pangan',
  badge text,
  is_active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_katalog_layanan_category
  on public.katalog_layanan (category);
create index if not exists idx_katalog_layanan_active
  on public.katalog_layanan (is_active);
create index if not exists idx_katalog_layanan_search
  on public.katalog_layanan using gin (
    to_tsvector('indonesian', coalesce(name,'') || ' ' || coalesce(full_name,'') || ' ' || coalesce(code,''))
  );

-- updated_at otomatis
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_katalog_touch on public.katalog_layanan;
create trigger trg_katalog_touch
  before update on public.katalog_layanan
  for each row execute function public.touch_updated_at();

-- RLS: baca publik, tulis butuh login (anon read-only)
alter table public.katalog_layanan enable row level security;

drop policy if exists "publik bisa baca katalog aktif" on public.katalog_layanan;
create policy "publik bisa baca katalog aktif"
  on public.katalog_layanan for select
  to anon, authenticated
  using (is_active = true);

drop policy if exists "user login bisa kelola katalog" on public.katalog_layanan;
create policy "user login bisa kelola katalog"
  on public.katalog_layanan for all
  to authenticated
  using (true) with check (true);

-- DEV: izinkan anon kelola katalog (tambah/ubah/hapus tanpa login).
-- HAPUS BLOK INI sebelum production / kalau sudah pakai Supabase Auth.
drop policy if exists "dev anon bisa kelola katalog" on public.katalog_layanan;
create policy "dev anon bisa kelola katalog"
  on public.katalog_layanan for all
  to anon
  using (true) with check (true);

-- Seed data awal (sama dengan desain)
insert into public.katalog_layanan
  (code, name, full_name, description, method, matrix, tat, price, category, badge, sort_order)
values
  ('TST-CHM-01', 'Analisis Logam Berat Pb & Cd', 'Analisis Kadar Timbal (Pb) & Kadmium (Cd)', 'LOD: 0.001 mg/kg • ICP-OES', 'SNI 01-2896-1998', 'Cair / Serbuk', '3 Hari Kerja', 520000, 'kimia', null, 1),
  ('TST-MB-04', 'Uji ALT & Koliform Total', 'Uji Angka Lempeng Total (ALT) & Koliform', 'Kultur Mikrobiologi Aerob', 'ISO 4833-1:2013', 'Makanan, Minuman', '5 Hari Kerja', 350000, 'pangan', 'Populer', 2),
  ('TST-ENV-12', 'Paket Uji BOD5 & COD Limbah', 'Analisis BOD5 & COD Air Limbah', 'Titrasi & Spektrofotometri UV-Vis', 'APHA 5210 B • 5220 D', 'Air Permukaan / Limbah', '5 Hari Kerja', 680000, 'lingkungan', 'Express Available', 3),
  ('TST-PHR-09', 'Uji Stabilitas Dipercepat ICH', 'Uji Stabilitas Dipercepat Sediaan Obat', 'Chamber 40°C ± 2°C / 75% RH ± 5%', 'ICH Q1A(R2) Guideline', 'Tablet, Kapsul, Krim', '14 Hari (Interim)', 2450000, 'farmasi', null, 4),
  ('TST-NUT-02', 'Kadar Vitamin C (HPLC-UV)', 'Analisis Kadar Vitamin C (Asam Askorbat)', 'Kromatografi Cair Kinerja Tinggi', 'AOAC 967.21 / HPLC', 'Sirup, Jus, Suplemen', '3 Hari Kerja', 420000, 'pangan', null, 5)
on conflict (code) do update set
  name = excluded.name, full_name = excluded.full_name,
  description = excluded.description, method = excluded.method,
  matrix = excluded.matrix, tat = excluded.tat, price = excluded.price,
  category = excluded.category, badge = excluded.badge;
