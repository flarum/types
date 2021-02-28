set -e

rm -rf types/
rm -rf repos/

REMOTE=`git rev-parse --abbrev-ref --symbolic-full-name @{u}`
REMOTE_PARSED=(${REMOTE//\// })
git clone `git remote get-url ${REMOTE_PARSED[0]}` types

# generate <ref> <npm version>
generate() {
    REF=$1
    VERSION=$2

    rm -rf types/*

    # clone repository
    mkdir -p repos/core
    git clone https://github.com/flarum/core.git repos/core
    (cd repos/core && git checkout $REF)

    # install dependencies
    (cd repos/core/js && npm ci)

    cd types/

    # create package.json
    cat > package.json << EOF
{
    "name": "flarum",
    "version: "$VERSION"
}
EOF


    # generate typings
    set +e
    tsc -p ../tsconfig.json
    set -e

    cd ..
}

push() {
    # push typings to repository
    cd types
    git add .
    git commit -m "Update typings ($1)" --author "GitHub Action <action@github.com>"
    git push 
}


generate master 0.1.0-beta.16
push 0.1.0-beta.16-dev