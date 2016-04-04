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
  39 | Hotland genocide 0->1 (Mettaton?)
  41 | `0->1` if you talk to training dummy. `1->0` after you meet first Froggit.
  42 | Toriel's house 0->1, snowdin 1->0
  43 | `0->1` if you kill training dummy. `0->1` if you kill first Froggit (but spared dummy). `1->0` if nobody came.
  45 | `0->1` if you kill training dummy. `0->2` if you talk to training dummy.
  46 | Hotland genocide 1->0
  47 | Core genocide 0->1
  51 | Waterfall genocide 0->1->3
  55 | Toriel's house 0->1
  56 | Gets incremented every time you save. Purpose unknown.
  61 | `0->1` after you meet first Froggit.
  65 | How many candies you took from candy room.
  76 | Toriel's house 0->3, 3->4. This must be 4 to allow Snowdin genocide mode.
  83 | Snowdin genocide 0->1 (no moving dog)
  84 | Snowdin genocide 0->1 (dog guards)
  85 | Snowdin genocide 0->1 (greater dog)
  88 | 0 -> Comedian got away failure, 2 -> OK
  93 | Snowdin genocide 0->1
  95 | Snowdin genocide 0->1
  98 | Snowdin genocide 0->1 (Papyrus)
  99 | Snowdin genocide 0->1
 101 | Snowdin genocide 0->1
 119 | Papyrus friendship progress? 1 - front of house, 2 - in house 4 - finished
 112 | Waterfall genocide 0->1 (Shyren)
 121 | Waterfall genocide 0->2
 122 | Waterfall genocide 0->10
 231 | `0->202` at second save point.
 232 | ? kills
 233 | Ruins kills
 234 | Snowdin kills
 235 | Waterfall kills
 236 | Hotland kills
 252 | `0->1` if nobody came.
 253 | `0->1` nobody came snowdin?
 282 | Waterfall genocide 0->1 (Undyne genocide 1)
 283 | Waterfall genocide 0->1 (Mad Dummy)
 301 | Waterfall genocide 0->1 (before cave bridge)
 302 | Throne room genocide 0->1 (Sans?)
 284 | 0->4 snowdin genocide
 381 | Waterfall genocide 0->1 (Undyne genocide 2)
 385 | Waterfall genocide 0->1
 387 | Waterfall genocide 0->1
 388 | Waterfall genocide 4->6
 389 | Waterfall genocide 0->8 (before cave bridge)
 391 | Waterfall genocide 0->1->0
 392 | Waterfall genocide 0->0.08 -> 0
 393 | Waterfall genocide 0 -> 0.5
 394 | Waterfall genocide 0->272->-1
 395 | Waterfall genocide 273->-1
 413 | Hotland genocide 0->10
 427 | Hotland genocide 0->6
 428 | Hotland genocide 0->1 (Muffet)
 429 | Hotland genocide 0->4 (no kills inbetween)
 433 | Hotland genocide 0->1 (bro guards)
 439 | Hotland genocide 3->4
 456 | Hotland genocide 0->1 (Mettaton)
 462 | Hotland genocide 0->1 (after you kill Mettaton)
 463 | Hotland genocide 0->1 (after you kill Mettaton)
 481 | Hotland genocide 0->17 (probably flowey dialogue)
 483 | Hotland genocide 0->1
 484 | Hotland genocide 0->1
 485 | Hotland genocide 0->1
 486 | Hotland genocide 0->2
 487 | Hotland genocide 0->1
 524 | If it's 12, Toriel will intervene in Asgore battle, and you can get pacifist ending.
 527 | Waterfall genocide 0->-1
 543 | Gets increased by varying values as you are making progress in the ruins. Possibly Toriel event marker. 25 when you killed toriel. 47 in snowdin spaghetti. Hmm.
 546 | Player has cellphone.
 547 | `232->235` if nobody came. 235->-999 waterfall genocide
 548 | Room the player is located in. See the `main.js` for a list of rooms.
 549 | The game time. Same as `Time` in the ini.
