import React from 'react';


function ListView(props) {
    return (
        <ul>
            {props.filteredList.length > 0 ?
                <div>
                    {props.filteredList}
                </div>
                :
                <li>현재 등록한 할일이 없습니다.</li>}
        </ul>
    )
}

export { ListView }

