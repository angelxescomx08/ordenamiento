import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import '../css/codigo.css'
export default function Codigo({codigo}) {
    return (
        <article className="codigo">
            <CodeMirror
                value={codigo}
                options={{
                    theme: 'monokai',
                    keyMap: 'sublime',
                    mode: 'jsx',
                    readOnly: true
                }}
            />
        </article>
    )
}