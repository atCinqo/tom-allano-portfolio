-- Planning Com HTV : base de données Supabase
-- 1. Remplacez CHANGEZ-MOI (ligne 21) par le code d'équipe de votre choix.
-- 2. Collez tout ce fichier dans Supabase > SQL Editor > New query, puis cliquez sur Run.
-- Pour changer de code plus tard : modifiez-le ligne 21 et relancez uniquement le bloc « create or replace function public.htv_check ».

create table if not exists public.htv_items (
  id text primary key,
  col text not null check (col in ('tasks', 'members', 'comments')),
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.htv_items enable row level security;
grant select, insert, update, delete on public.htv_items to anon;

-- Le code d'équipe n'est écrit qu'ici, côté serveur : il n'apparaît pas dans le code de la page.
create or replace function public.htv_check(code text)
returns boolean
language sql stable security definer set search_path = public
as $$
  select code = 'CHANGEZ-MOI'
$$;
grant execute on function public.htv_check(text) to anon;

-- Vérifie le code envoyé par la page dans l'en-tête x-team-code.
create or replace function public.htv_code_ok()
returns boolean
language sql stable
as $$
  select public.htv_check(coalesce(current_setting('request.headers', true)::json ->> 'x-team-code', ''))
$$;
grant execute on function public.htv_code_ok() to anon;

drop policy if exists "htv lecture" on public.htv_items;
drop policy if exists "htv ajout" on public.htv_items;
drop policy if exists "htv modification" on public.htv_items;
drop policy if exists "htv suppression" on public.htv_items;
create policy "htv lecture" on public.htv_items for select to anon using (public.htv_code_ok());
create policy "htv ajout" on public.htv_items for insert to anon with check (public.htv_code_ok());
create policy "htv modification" on public.htv_items for update to anon using (public.htv_code_ok()) with check (public.htv_code_ok());
create policy "htv suppression" on public.htv_items for delete to anon using (public.htv_code_ok());
