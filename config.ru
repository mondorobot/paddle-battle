require 'rack/contrib/try_static'
require 'rack/contrib/not_found'

use Rack::TryStatic,
  urls: %w[/],
  root: "www",
  try: ['index.html', '/index.html'],
  header_rules: [
    [["html"],  {'Content-Type' => 'text/html; charset=utf-8'}],
    [["css"],   {'Content-Type' => 'text/css'}],
    [["js"],    {'Content-Type' => 'text/javascript'}],
    [["png"],   {'Content-Type' => 'image/png'}],
    [["jpg"],   {'Content-Type' => 'image/jpeg'}],
    ["/assets", {'Cache-Control' => 'public, max-age=31536000'}],
  ]

run Rack::NotFound.new('www/404.html')
