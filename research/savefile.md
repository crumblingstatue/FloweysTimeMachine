# Save files

The save files are a list of values separated by newline.

There are two save files, `file0` and `file9`. When you save your game, both get written to the same values.
It is unknown why there are two save files instead of one.

Line | Description
----:| -----------
  41 | `0->1` if you talk to training dummy.
  43 | `0->1` if you kill training dummy.
  45 | `0->1` if you kill training dummy. `0->2` if you talk to training dummy.
  56 | Gets incremented every time you save. Purpose unknown.
 543 | Gets increased by varying values as you are making progress in the tutorial dungeon.
 549 | The game time. Same as `Time` in the ini.
