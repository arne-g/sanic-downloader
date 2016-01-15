#!/usr/bin/env python2

import urllib

html_encoded_string = 'http%3A%2F%2Ftrailers1.bbcache.com%2Fbangbros18%2Fbbe14509%2Ftrailerx%2Ftrailer_1500.mp4'
print(urllib.unquote(html_encoded_string))
