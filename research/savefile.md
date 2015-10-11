# Save files

The save files are a list of values separated by newline.

There are two save files, `file0` and `file9`. When you save your game, both get written to the same values.
It is unknown why there are two save files instead of one. `file9` seem to be written to when you load a save file.

Line | Description
----:| -----------
   1 | Character name
   2 | LV
   3 | HP
   5 | `10->12` if you kill first Froggit.
  10 | EXP
  11 | GOLD
  12 | `0->1` if you kill first Froggit.
  13 | `0->1` Inventory slot 1
  14 | `0->201` at second save point.
  15 | `0->1` Inventory slot 2
  16 | `0->203` at second save point.
  17 | `0->1` Inventory slot 3
  18 | `0->204` at second save point.
  19 | `0->1` Inventory slot 4
  20 | `0->205` at second save point.
  41 | `0->1` if you talk to training dummy. `1->0` after you meet first Froggit.
  43 | `0->1` if you kill training dummy. `0->1` if you kill first Froggit (but spared dummy).
  45 | `0->1` if you kill training dummy. `0->2` if you talk to training dummy.
  56 | Gets incremented every time you save. Purpose unknown.
  61 | `0->1` after you meet first Froggit.
  65 | How many candies you took from candy room.
 231 | `0->202` at second save point.
 543 | Gets increased by varying values as you are making progress in the tutorial dungeon.
 546 | `0->1` at second save point.
 548 | Room the player is located in. See the `rooms.md`.
 549 | The game time. Same as `Time` in the ini.
