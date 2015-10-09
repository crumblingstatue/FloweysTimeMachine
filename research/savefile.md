# Save files

The save files are a list of values separated by newline.

There are two save files, `file0` and `file9`. When you save your game, both get written to the same values.
It is unknown why there are two save files instead of one.

Line | Nick         | Description
----:| ------------ | -----------
  56 | save_counter | Gets incremented by 2 every time you save. Purpose unknown.
 549 | time         | The game time. Same as `Time` in the ini.
