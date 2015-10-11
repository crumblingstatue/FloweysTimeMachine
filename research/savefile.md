# Save files

The save files are a list of values separated by newline.

There are two save files, `file0` and `file9`. When you save your game, both get written to the same values.
It is unknown why there are two save files instead of one. `file9` seem to be written to when you load a save file.

Line | Description
----:| -----------
   2 | LV
   3 | HP
   5 | `10->12` if you kill first Froggit.
  10 | EXP
  11 | `0->20` if you kill first Froggit (NEXT?).
  12 | `0->1` if you kill first Froggit.
  41 | `0->1` if you talk to training dummy. `1->0` if you kill first Froggit (but spared dummy).
  43 | `0->1` if you kill training dummy. `0->1` if you kill first Froggit (but spared dummy).
  45 | `0->1` if you kill training dummy. `0->2` if you talk to training dummy.
  56 | Gets incremented every time you save. Purpose unknown.
  61 | `0->1` if you kill first Froggit.
 543 | Gets increased by varying values as you are making progress in the tutorial dungeon.
 549 | The game time. Same as `Time` in the ini.
