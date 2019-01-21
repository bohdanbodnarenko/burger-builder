import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import styled from 'styled-components'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Content = styled.main `
    margin-top: 72px;
`

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render() {
        return (
            <Aux>
                <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}/>
                <Content>
                    {this.props.children}
                </Content>
            </Aux>
        );
    }
}

export default Layout;