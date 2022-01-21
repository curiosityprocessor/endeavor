import ColorBoxHook from './components/ColorBoxHook';
import SelectColors from './components/SelectColors';
import SelectColorsClass from './components/SelectColorsClass';
import { ColorProvider } from './contexts/color';

const App = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors/>
                {/* <SelectColorsClass /> */}
                <ColorBoxHook />
            </div>
        </ColorProvider>
    )
};
export default App;