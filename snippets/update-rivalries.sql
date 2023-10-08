/* select count(*), rivalry_id from contests group by rivalry_id having count(*) > 10;

SELECT * from rivalries WHERE id in (
1,2,6,7,8,10,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40
)


SELECT distinct(user_a_id) from rivalries WHERE id in (
1,2,6,7,8,13,14,15,17,20,21,23,27,35,36,38,39
)


select * from users where id IN (
1,2,3,5,11,15,16,19,20,23,31,52,86,95,113,118
);


UPDATE users SET awsSub = '04787478-f041-7060-81c6-ef077fd3e7e8' WHERE email = 't@t.t' LIMIT 1;
UPDATE users SET awsSub = '04882478-6011-704d-3bc8-06933e0ce5e2' WHERE email = 'go4light@rocketmail.com' LIMIT 1;
UPDATE users SET awsSub = '14080478-60c1-7064-b387-a29b6c6d3304' WHERE email = 'robbiemoritz@gmail.com' LIMIT 1;
UPDATE users SET awsSub = '14985478-3051-702f-1419-24ab6f0e953a' WHERE email = 'chase@chasemoritz.com' LIMIT 1;
UPDATE users SET awsSub = '345864f8-c051-7060-7430-a3b9a9fa184b' WHERE email = 'djfransz@gmail.com' LIMIT 1;
UPDATE users SET awsSub = '34588418-40e1-7045-c57b-870ba40eac13' WHERE email = 'charity@charitymoritz.com' LIMIT 1;
UPDATE users SET awsSub = '5458c408-50f1-70f7-b05d-436c59c5d480' WHERE email = 'tony@tonymoritz.com' LIMIT 1;
UPDATE users SET awsSub = '74480468-a061-70bb-5d49-7b693c207b7f' WHERE email = 'jeremy@jeremymoritz.com' LIMIT 1;
UPDATE users SET awsSub = '94982438-1031-70aa-b589-1cac98b51f4b' WHERE email = 'shepherdlang5@gmail.com' LIMIT 1;
UPDATE users SET awsSub = 'a498a438-c0e1-7078-631b-ad8d7048dec6' WHERE email = 'andrewmoritz5502@gmail.com' LIMIT 1;
UPDATE users SET awsSub = 'a4d8b408-00c1-7003-07a8-a68583aaa691' WHERE email = 'chriscinoma@aol.com' LIMIT 1;
UPDATE users SET awsSub = 'b408d438-f0f1-7011-8750-2975220682cf' WHERE email = 'rachelinoctober@yahoo.com' LIMIT 1;
UPDATE users SET awsSub = 'b47844b8-00a1-70eb-8096-866ee954be34' WHERE email = 'd_wintterle@hotmail.com' LIMIT 1;
UPDATE users SET awsSub = 'c45844b8-e051-7084-2db4-b6011881d321' WHERE email = 'tylerdicamilllo@gmail.com' LIMIT 1;
UPDATE users SET awsSub = 'd4286408-50b1-707f-ade0-8c6f72a1d17d' WHERE email = 'calebbpresley@gmail.com' LIMIT 1;
UPDATE users SET awsSub = 'e4c8b4b8-8071-70c5-b362-b45588625b4d' WHERE email = 'shepherdlang11@gmail.com' LIMIT 1;
UPDATE users SET awsSub = 'f4d80428-a021-7000-b9d8-06179526403b' WHERE email = 'a_martin1@yahoo.com' LIMIT 1;


UPDATE fighters SET gameId = '73ed69cf-2775-43d6-bece-aed10da3e25a';


SELECT `id_uuid` as `id`, `name`, `gameId`, `created_at` as createdAt, `updated_at` as updatedAt FROM `fighters` LIMIT 0,1000; */

-- UPDATE fighters SET gamePosition = id;

-- UPDATE rivalries SET gameId = '73ed69cf-2775-43d6-bece-aed10da3e25a';

/* UPDATE rivalries r
INNER JOIN users u ON u.id = r.user_b_id
SET r.userBId = u.id_uuid; */
/*
UPDATE tier_lists tl
INNER JOIN rivalries r ON r.id = tl.rivalry_id
SET tl.rivalryId = r.id_uuid;
*/

UPDATE tier_lists x
INNER JOIN users y ON y.id = x.user_id
SET x.userId = y.id_uuid;




UPDATE tier_slots x
INNER JOIN tier_lists y ON y.id = x.tier_list_id
SET x.tierListId = y.id_uuid;

UPDATE tier_slots x
INNER JOIN fighters y ON y.id = x.fighter_id
SET x.fighterId = y.id_uuid;



UPDATE contests x
INNER JOIN rivalries y ON y.id = x.rivalry_id
SET x.rivalryId = y.id_uuid;

UPDATE contests x
INNER JOIN tier_slots y ON y.id = x.tier_slot_a_id
SET x.tierSlotAId = y.id_uuid;

UPDATE contests x
INNER JOIN tier_slots y ON y.id = x.tier_slot_b_id
SET x.tierSlotBId = y.id_uuid;

SELECT
  id_uuid,
	rivalryId,
	tierSlotAId,
  tierSlotBId,
  result,
  bias,
  created_at,
  updated_at,
  deleted_at
FROM contests
LIMIT 6000;
