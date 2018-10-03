Initialize the project:
```
$ rush init
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
$ rush publish -p -b master
```







```
# add custom `test` command to common/config/command-line.json
$ rush test
```


```
# commit changes before creating change log
$ rush change
$ rush publish --publish
# verify to output above amd do
```


```
$ rush update --full
$ rush rebuild
```
