CREATE TABLE IF NOT EXISTS public.bird_order
(
    id			SERIAL			PRIMARY KEY,
    latin     	varchar(255)    NOT NULL,
	ebirdId 	varchar(255)    NULL,
	titleRu		varchar(255),
	titleEn		varchar(255),
	titleEs		varchar(255),
    CONSTRAINT bird_order_un_1
        UNIQUE (latin)
);

CREATE TABLE IF NOT EXISTS public.bird_family
(
    id			SERIAL			PRIMARY KEY,
    latin     	varchar(255)    NOT NULL,
	ebirdId 	varchar(255)    NULL,
	titleRu		varchar(255),
	titleEn		varchar(255),
	titleEs		varchar(255),
	orderId		BIGINT,
    CONSTRAINT bird_family_un_1
        UNIQUE (latin),
	CONSTRAINT bird_family_fk_1
        FOREIGN KEY (orderId) REFERENCES bird_order (id)
            ON UPDATE CASCADE 
			ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS public.bird_genus
(
    id			SERIAL			PRIMARY KEY,
    latin     	varchar(255)    NOT NULL,
	ebirdId 	varchar(255)    NULL,
	titleRu		varchar(255),
	titleEn		varchar(255),
	titleEs		varchar(255),
	familyId	BIGINT,
    CONSTRAINT bird_genus_un_1
        UNIQUE (latin),
	CONSTRAINT bird_genus_fk_1
        FOREIGN KEY (familyId) REFERENCES bird_family (id)
            ON UPDATE CASCADE 
			ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS public.bird_species
(
    id			SERIAL			PRIMARY KEY,
    latin     	varchar(255)    NOT NULL,
	ebirdId 	varchar(255)    NULL,
	titleRu		varchar(255),
	titleEn		varchar(255),
	titleEs		varchar(255),
	genusId		BIGINT,
    CONSTRAINT bird_species_un_1
        UNIQUE (latin),
	CONSTRAINT bird_species_fk_1
        FOREIGN KEY (genusId) REFERENCES bird_genus (id)
            ON UPDATE CASCADE 
			ON DELETE SET NULL
);

DROP TABLE public.bio_taxons;
DROP TABLE public.bio_taxons_locale;

INSERT INTO public.bird_order (latin, ebirdId, titleRu, titleEn, titleEs)
	SELECT 
			bt.latin,
			NULL,
			btl.title_ru,
			btl.title_en,
			btl.title_es
		FROM 
			public.bio_taxons AS bt
			INNER JOIN public.bio_taxons_locale AS btl
				ON btl.taxonid = bt.id
		WHERE type = 'order';

INSERT INTO public.bird_family (latin, ebirdId, titleRu, titleEn, titleEs, orderId)
	SELECT
			bt.latin,
			NULL,
			btl.title_ru,
			btl.title_en,
			btl.title_es,
			(
				SELECT bt.parentid - MAX(parentid)
					FROM public.bio_taxons AS bt1
					WHERE type = 'order'
			)
		FROM
			public.bio_taxons AS bt
			INNER JOIN public.bio_taxons_locale AS btl
				ON btl.taxonid = bt.id
		WHERE type = 'family';

INSERT INTO public.bird_genus (latin, ebirdId, titleRu, titleEn, titleEs, familyId)
	SELECT 
			bt.latin,
			NULL,
			btl.title_ru,
			btl.title_en,
			btl.title_es,
			(
				SELECT bt.parentid - MAX(parentid)
					FROM public.bio_taxons AS bt1
					WHERE type = 'family'
			)				
		FROM 
			public.bio_taxons AS bt
			INNER JOIN public.bio_taxons_locale AS btl
				ON btl.taxonid = bt.id
		WHERE type = 'genus';
		
INSERT INTO public.bird_species (latin, ebirdId, titleRu, titleEn, titleEs, genusId)
	SELECT 
			bt.latin,
			NULL,
			btl.title_ru,
			btl.title_en,
			btl.title_es,
			(
				SELECT bt.parentid - MAX(parentid)
					FROM public.bio_taxons AS bt1
					WHERE type = 'genus'
			)				
		FROM 
			public.bio_taxons AS bt
			INNER JOIN public.bio_taxons_locale AS btl
				ON btl.taxonid = bt.id
		WHERE type = 'species';