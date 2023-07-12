SELECT
        bs.id           AS bird_id,

		bs.latin 		AS 	species_latin,
		bs.avibaseId 	AS  species_avibaseId,
		bs.titleRu 		AS 	species_titleRu,
		bs.titleEn 		AS 	species_titleEn,
		bs.titleEs	 	AS 	species_titleEs,

		bg.latin 		AS 	genus_latin,
		bg.avibaseId 	AS  genus_avibaseId,
		bg.titleRu 		AS 	genus_titleRu,
		bg.titleEn 		AS 	genus_titleEn,
		bg.titleEs 		AS 	genus_titleEs,

		bf.latin 		AS 	family_latin,
		bf.avibaseId 	AS  family_avibaseId,
		bf.titleRu 		AS 	family_titleRu,
		bf.titleEn 		AS 	family_titleEn,
		bf.titleEs 		AS 	family_titleEs,

		bo.latin 		AS 	order_latin,
		bo.avibaseId 	AS  order_avibaseId,
		bo.titleRu 		AS 	order_titleRu,
		bo.titleEn 		AS 	order_titleEn,
		bo.titleEs 		AS 	order_titleEs
	FROM
		public.bird_species AS bs
			INNER JOIN public.bird_genus AS bg
				ON bs.genusId = bg.id
			INNER JOIN public.bird_family AS bf
				ON bg.familyId = bf.id
			INNER JOIN public.bird_order AS bo
				ON bf.orderId = bo.id;