import React, { Component } from 'react'
import styled from 'styled-components';
import Data from '../../../sample.json';
import Drag from '../Drag/Drag';
import Drop from '../Drop/Drop';

const Wrapper = styled.div`
border: 1px solid black;
width: auto;
padding: 32px;
display: flex;
justify-content: center;
`;

const Item = styled.button`
padding: 8px
color: #555;
background-color: white;
border-radius: 3px;
:focus {
    color: red;
}
cursor: pointer;
border: none;
`;

const Button = styled.button`
padding: 8px
color: #555;
background-color: white;
border-radius: 3px;
:focus {
    color: red;
}
cursor: pointer;
`;

const dropStyle = {
    backgroundColor: '#555',
    width: '250px',
    height: '400px',
    margin: '32px'
};

export default class DragDrop extends Component {

    hybridSelector1 = (source, target, shift, rshift) => {
        var ddlSource = source;
        var ddlTarget = target;
        var btnShift = shift;
        var btnRShift = rshift;

            var selectedItems = getSelectOptions(source);
            if (selectedItems) {
                for (var i = 0; i < selectedItems.length; i++) {
                    var option = new Option(selectedItems[i].text, selectedItems[i].text);
                    ddlTarget.appendChild(option);
                    selectedItems[i].remove();
                }
            }

        function getSelectOptions(select) {
            var result = [];
            var options = select.options;
            var opt;

            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    result.push(opt);
                }
            }
            return result;
        }

        return ddlTarget.options;
    };

    hybridSelector2 = (source, target, shift, rshift) => {
        var ddlSource = source;
        var ddlTarget = target;
        var btnShift = shift;
        var btnRShift = rshift;
        
        
            var selectedItems = getSelectOptions(target);
            if (selectedItems) {
                for (var i = 0; i < selectedItems.length; i++) {
                    var option = new Option(selectedItems[i].text, selectedItems[i].text);
                    ddlSource.appendChild(option);
                    selectedItems[i].remove();
                }
            }

        function getSelectOptions(select) {
            var result = [];
            var options = select.options;
            var opt;

            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    result.push(opt);
                }
            }
            return result;
        }
        return ddlTarget.options;
    };

    render() {
        return (
            <div>
                <Wrapper>
                    <Drop multiple id="source1" style={dropStyle}>
                       {/* <Drag id="item1" style={{margin: '8px'}}><Item>Some Item</Item></Drag>
                       <Drag id="item2" style={{margin: '8px'}}><Item>Some Other Item</Item></Drag>
                       <Drag id="item3" style={{margin: '8px'}}><Item>Some Another Item</Item></Drag> */}
                       {Data.map((item, index) => {
                           return <Drag id={item.id} style={{margin: '8px'}}><Item>{item.title}</Item></Drag>
                       })}
                    </Drop>
                    <div>
                    <button id="shift1" style={{margin: '8px', display: 'inline'}}>L to R Shift</button>
                    <button id="rshift1" style={{margin: '8px', display: 'inline'}}>R to L Shift</button>
                    </div>
                    <Drop multiple id="target1" style={dropStyle}>
                    </Drop>
                </Wrapper>
            </div>
        )
    }
}
