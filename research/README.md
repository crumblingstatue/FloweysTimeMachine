# Research

Research into the mechanics of save games in undertale.

## Initial state

Until you pick a name and begin the game, there is nothing.

## First play

When you first pick a name and enter the world, undertale.ini gets created with the following data
```
[General]
fun="45.000000"

```

## Meeting Flowey
When you first meet Flowey, the following entry gets added:
```
[Flowey]]
Met1="1.000000"
```
## First save
When you first save the game, the following entries get added:
```
[General]
Room="6.000000"
Kills="0.000000"
Time="5273.000000"
Love="1.000000"
Name="your_character_name"

```

`Fun` gets changed to `"33.000000"`.

Two files named `file0` and `file9` also get created.
They are two identical files at this time.
The initial state can be found here in the `research/` directory as `file0_init`.
The description table can be found as `savefile.md`.
