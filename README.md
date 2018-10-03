Initialize the project:
```
$ rush init
$ rush update --full
$ rush rebuild
```

Publish for the first time:
```
# commit changes before creating change log
$ rush publish --publish
```

Publish changed packages:
```
# commit changes but DO NOT push them to origin before creating change log
$ rush change
$ rush version --bump
$ rush publish --publish --include-all
```

Define custom `test` command:
```
# add custom `test` command to common/config/command-line.json
$ rush test
```
