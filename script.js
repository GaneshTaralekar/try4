async function main() {
    let a  = await fetchDirectoryFiles("http://127.0.0.1:5501/songs/1.mp3")
    let re = await a.text()
    console.log(re)
}
main() 