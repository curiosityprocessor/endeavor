import { ColorConsumer } from "../contexts/color";

const colors = ['red', 'orange',' yellow', 'green', 'blue', 'indigi', 'violet'];
const SelectColors = () => {
    return (
        <div>
            <h2>select color</h2>
            <ColorConsumer>
                {{ actions } > (
                    <div style={{display:'flex'}}>
                        {colors.map(color => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer',
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
        </div>
    )
};
export default SelectColors;