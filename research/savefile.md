# Save files

The save files are a list of values separated by newline.

There are two save files, `file0` and `file9`. When you save your game, both get written to the same values.
It is unknown why there are two save files instead of one. `file9` seem to be written to when you load a save file.
Only `file0` is required to load a game. `file9` might be used as a backup, or when Flowey breaks your main save game.
A `file8` also gets created when you fight Flowey after he killed Asgore.

Line | Description
----:| -----------
   1 | Character name
   2 | LV
   3 | HP
   5 | AT
   6 | Weapon AT
   7 | DF
   8 | Armor DF
  10 | EXP
  11 | GOLD
  12 | Kills
  13 | Inventory slot 1. See `main.js` for a list of items.
  14 | Cellphone talk option 1. See `main.js for a list of options.` This actually takes an item id, but item ids above 200 are cellphone options. If you put an item in this slot, you can use it indefinitely because it doesn't get used up.
  15 | Inventory slot 2
  16 | Cellphone talk option 2
  17 | Inventory slot 3
  18 | Cellphone talk option 3
  19 | Inventory slot 4
  20 | Cellphone talk option 4
  21 | Inventory slot 5
  22 | Cellphone talk option 5
  23 | Inventory slot 6
  24 | Cellphone talk option 6
  25 | Inventory slot 7
  26 | Cellphone talk option 7
  27 | Inventory slot 8
  28 | Cellphone talk option 8
  29 | Weapon
  30 | Armor
  41 | `0->1` if you talk to training dummy. `1->0` after you meet first Froggit.
  43 | `0->1` if you kill training dummy. `0->1` if you kill first Froggit (but spared dummy). `1->0` if nobody came.
  45 | `0->1` if you kill training dummy. `0->2` if you talk to training dummy.
  56 | Gets incremented every time you save. Purpose unknown.
  61 | `0->1` after you meet first Froggit.
  65 | How many candies you took from candy room.
 231 | `0->202` at second save point.
 232 | ? kills
 233 | Dungeon kills
 234 | Snowdin kills
 252 | `0->1` if nobody came.
 543 | Gets increased by varying values as you are making progress in the tutorial dungeon.
 546 | Player has cellphone.
 547 | `232->235` if nobody came.
 548 | Room the player is located in. See the `main.js` for a list of rooms.
 549 | The game time. Same as `Time` in the ini.
