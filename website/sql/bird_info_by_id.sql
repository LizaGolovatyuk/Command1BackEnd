WITH
	bit AS (SELECT btl.title_ru FROM public.bio_taxons_locale AS btl WHERE btl.taxonid = {{bird_id}}),
	gid AS (SELECT bt.parentid FROM public.bio_taxons AS bt WHERE bt.id = {{bird_id}}),
	git AS (SELECT btl.title_ru FROM public.bio_taxons_locale AS btl WHERE btl.taxonid = (SELECT * FROM gid)),
	fid AS (SELECT bt.parentid FROM public.bio_taxons AS bt WHERE bt.id = (SELECT * FROM gid)),
	fit AS (SELECT btl.title_ru FROM public.bio_taxons_locale AS btl WHERE btl.taxonid = (SELECT * FROM fid)),
	oid AS (SELECT bt.parentid FROM public.bio_taxons AS bt WHERE bt.id = (SELECT * FROM fid)),
	oit AS (SELECT btl.title_ru FROM public.bio_taxons_locale AS btl WHERE btl.taxonid = (SELECT * FROM oid))
SELECT
	{{bird_id}} AS bird_id,
	(SELECT * FROM bit) AS bird_title,
	(SELECT * FROM oid) AS order_id,
	(SELECT * FROM oit) AS order_title,
	(SELECT * FROM fid) AS family_id,
	(SELECT * FROM fit) AS family_title,
	(SELECT * FROM gid) AS genus_id,
	(SELECT * FROM git) AS genus_title;