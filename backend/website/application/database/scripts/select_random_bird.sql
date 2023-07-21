/*
Возвращает данные по 1 случайной птице
*/

WITH bi (minId, maxId) AS (
	SELECT MIN(id), MAX(id) FROM bird_species
),
bid AS (
	SELECT FLOOR(RANDOM()*((SELECT maxId FROM bi) - (SELECT minId FROM bi) + 1)) + (SELECT minId FROM bi)
),
bird AS (
	SELECT * FROM bird_species WHERE id = (SELECT * FROM bid)
)
SELECT
		bs.latin 		AS 	species_latin,
		bs.ebirdId 	    AS  species_ebirdId,
		bs.titleRu 		AS 	species_titleRu,
		bs.titleEn 		AS 	species_titleEn,
		bs.titleEs	 	AS 	species_titleEs,
		bs.avatar       AS  species_avatar,
		bs.video        AS  species_video,
		bs.preview      AS  species_preview,

		bg.latin 		AS 	genus_latin,
		bg.ebirdId 	    AS  genus_ebirdId,
		bg.titleRu 		AS 	genus_titleRu,
		bg.titleEn 		AS 	genus_titleEn,
		bg.titleEs 		AS 	genus_titleEs,

		bf.latin 		AS 	family_latin,
		bf.ebirdId 	    AS  family_ebirdId,
		bf.titleRu 		AS 	family_titleRu,
		bf.titleEn 		AS 	family_titleEn,
		bf.titleEs 		AS 	family_titleEs,

		bo.latin 		AS 	order_latin,
		bo.ebirdId 	    AS  order_ebirdId,
		bo.titleRu 		AS 	order_titleRu,
		bo.titleEn 		AS 	order_titleEn,
		bo.titleEs 		AS 	order_titleEs
	FROM
		bird AS bs
			INNER JOIN public.bird_genus AS bg
				ON bs.genusId = bg.id
			INNER JOIN public.bird_family AS bf
				ON bg.familyId = bf.id
			INNER JOIN public.bird_order AS bo
				ON bf.orderId = bo.id;