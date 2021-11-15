import { h } from 'preact';

// utils
import { getIplMarket } from '@utils/data.utils';
import { getMarketInfo } from './MarketBox.utils';

// types
import { IMarketItem, IMarketState } from 'src/types/data.types';

// styles
import './MarketBox.module.scss';

/**
 * interpolate data and render <polyline> svg
 * @param width viewbox width
 * @param height viewbox height
 * @param items
 * @returns
 */
const getSvg = (width: number, height: number, items: IMarketItem[]) => {
    // fit viewbox
    const { ipl } = getIplMarket(height, width, items);

    // build svg
    return ipl
        .map(item => {
            const {
                openTime: x,
                spark: { close: y }
            } = item;

            return x + ',' + y;
        })
        .join(' ');
};

export interface IMarketBoxProps {
    state: IMarketState;
}

export const MarketBox = ({ state }: IMarketBoxProps) => {
    const { key, name, rank, items } = state;

    // svg frame
    const width = 500;
    const height = 100;

    const viewBox = `0 0 ${width} ${height}`;
    const svg = getSvg(width, height, items);

    // info
    const { price, volume, trend, percent, color } = getMarketInfo(items);

    return (
        <div className={`market-box market-box--${trend}`}>
            <div className="market-box__title">
                <span className="title--token">
                    {name} ({key})
                </span>
                <span className="title--rank" style={{ color }}>
                    #{rank}
                </span>
            </div>
            <div className="market-box__price">
                <span className="price--text">{price}</span>
                <span className="price--change" style={{ color }}>
                    {percent}
                </span>
            </div>
            <div className="market-box__volume">
                <span className="clr-text-weak">Volume</span>
                <span className="volume--percent">{volume}</span>
            </div>

            <svg
                className="market-box__svg"
                viewBox={viewBox}
                style={{ width: '100%' }}
            >
                <polyline
                    fill="none"
                    stroke={color}
                    strokeLinejoin="round"
                    stroke-width="2"
                    points={svg}
                />
            </svg>
        </div>
    );
};
