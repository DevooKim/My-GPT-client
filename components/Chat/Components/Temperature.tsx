import { useMemo, useState } from "react";

const defaultTemp = 0.8;

export default function TemperatureSlider() {
    const [t, setT] = useState(defaultTemp);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setT(parseFloat(e.target.value));
  
    return (
        <div className="flex flex-col">
            <label className="mb-2 text-neutral-50">Temperature</label>
            <span className="text-neutral-200">
                값이 높으면 응답이 더 다양해지고 낮으면 더 일관성 있는 응답을
                합니다.
            </span>
            <span className="my-2 text-center text-neutral-200">
                {t.toFixed(1)}
            </span>
            <input
                className={`pr-6 cursor-pointer accent-blue-600`}
                type="range"
                min={0}
                max={1}
                step={0.1}
                onChange={handleChange}
                value={t}
            />
        </div>
    );
}
