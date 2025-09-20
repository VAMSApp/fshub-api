param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("patch", "minor", "major")]
    [string]$Type
)

npm version $Type
npm run build
git add .
$version = npm pkg get version
$version = $version.Trim('"')
git commit -m "Release v$version"
git tag -a "v$version" -m "Release v$version"
git push origin master
git push origin --tags