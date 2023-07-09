SELECT id
	FROM public.bio_taxons
	WHERE
		type = 'species'
		AND parentid = {{genus_id}};