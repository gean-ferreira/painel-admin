/*

  Os arquivos de fonts deverá seguir o seguinte formato:
  
  <nome do arquivo>_<tipo>.<extensão>
  
  Por exemplo => arial_bold.ttf

*/

const fs = require('fs')
const path = require('path')

const dir: string = './src/assets/fonts' // diretório que encontram-se as fonts
const scriptName: string = 'script.ts' // nome do arquivo do script

fs.readdir(dir, (err: NodeJS.ErrnoException | null, files: string[]) => {
  if (err) {
    console.error(`Erro ao ler o diretório ${dir}:`, err)
    return
  }

  let scssContent: string = `$fonts: (\n`
  files.forEach((file: string) => {
    // pule o próprio script
    if (file === scriptName) return

    const fontKey: string = path.basename(file).split('_').pop().split('.')[0] // pegando o segmento após o último sublinhado e antes da extensão
    const fontName: string = path.basename(file, path.extname(file))
    scssContent += `  '${fontKey}': '${fontName}',\n`
  })

  scssContent += `);\n\n`

  files.forEach((file: string) => {
    // pule o próprio script
    if (file === scriptName) return

    const fontName: string = path.basename(file, path.extname(file))
    const fontKey: string = path.basename(file).split('_').pop().split('.')[0] // pegando o segmento após o último sublinhado e antes da extensão

    scssContent += `@font-face {
  font-family: 'font-${fontKey}';
  src: url('../fonts/${fontName}${path.extname(file)}') format('${path
      .extname(file)
      .replace('.', '')}');
  font-display: swap;
};\n\n`
  })

  fs.writeFile(
    './src/assets/scss/base/_typography.scss',
    scssContent,
    (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.error('Erro ao escrever o arquivo _typography.scss:', err)
      } else {
        console.log('Arquivo _typography.scss criado com sucesso.')
      }
    }
  )
})
