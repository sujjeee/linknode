import React from 'react'
import { BACKGROUND_OPTIONS } from './BgSnippets';
import BgContainer from './BgContainer';

interface BgThemesProps {

}

const BgThemes: React.FC<BgThemesProps> = ({ }) => {
    return (
        <div className='flex gap-4 overflow-x-scroll hide_scrollbar'>
            {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                    <BgContainer
                    >
                        {background.component}
                    </BgContainer>
                );
            })}
        </div>
    )
}

export default BgThemes

