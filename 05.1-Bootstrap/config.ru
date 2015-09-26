use Rack::Static,
  :urls => ["/images", "/js", "/css", "/lib"],
  :root => "public"

run lambda { |env|
  [
  200,
    {
      'Content-Type' => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open("public/starcEng.html", File::RDONLY)
  ]
}

