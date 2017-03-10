# VKToken

Get OAuth 2.0 token from VK.

## Install
```npm install -g vktoken```<br>
*(or without `-g` flag, if you're using it only as library)*

## Usage from terminal
**With vktoken.json:**<br>
```vktoken```

See config example in [vktoken.example.json](https://github.com/notarseniy/vktoken/blob/master/vktoken.example.json).
<hr>

**With command line options:**<br>
```vktoken --client_id 1337 --client_secret "THISISRANDOMEXAMPLE" --username "+79999999999" --password "qwertyuiop" --phone "+79999999999"```

*Arguments:*
* `--client_id` — ID of your application;
* `--client_secret` — Secret code of application;
* `--username` — Your email or phone of VK;
* `--password` — Your password;
* `--phone` — Phone number;
<hr>

**MacOS (copies to clipboard):**<br>
```vktoken | pbcopy```
<hr>

The response contains the token.

## Copyright
Arseniy Maximov, 2017.
