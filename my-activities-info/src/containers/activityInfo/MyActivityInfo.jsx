import React, { Component } from 'react';
import { fetchActicvityinfo } from '../../redux/modules/myActivity/myActivity';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserCard from '../../components/activityInfo/UserCard.jsx';
import '../../styles/activityInfo.css';

class MyActivityInfo extends Component{
    componentDidMount(){
        this.props.fetchActicvityinfo();
    }

    getUserCards(){
        const user = this.props.content.map((user) =>{
            return <UserCard key={user.id} user={user} />
        });
        return user;
    }

    render(){
        return(
            <div>
                {this.getUserCards()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        content : state.myActivityInfo.content,
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchActicvityinfo: bindActionCreators(fetchActicvityinfo, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyActivityInfo);