<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function loadScript(url) {
            var script = document.createElement('script');
            script.src = url;
            document.head.appendChild(script);
        }
        loadScript("script.js")
    </script>
</head>

<body>
</body>
</html>