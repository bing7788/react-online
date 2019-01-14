import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Layout,Modal, Button, Tabs, Card, Row,Input,Col,Avatar, Icon,Form,Pagination,Select,} from 'antd';
import MyTag from './Tag';
import ChoseTemplate from './ChoseTemplate'
import '../../App.css'
import './Account.css'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1006980_or3kowafoh.js',
});
const Option = Select.Option;
function handleChange(value) {
  console.log(`selected ${value}`);
}
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span:2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const TabPane = Tabs.TabPane;
const { Header, Content } = Layout;
const {Meta} = Card;
const suffix=<Icon type="close-circle"/>
const FormItem = Form.Item;
  class Account extends Component {
    state = { 
      visible: false ,
      checked: true,//Tag状态
      templatevisible:false,//控制课件模版弹出框
    }
    //Modal事件
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
     //课件模版选择确认弹出框
     showModal_template = () => {
      this.setState({
        templatevisible: true,
      });
    }
  
    handleOk_template = (e) => {
      console.log(e);
      this.setState({
        templatevisible: false,
      });
      Modal.success({
        title: '消息提示',
        content: '成功选择该课件模版！',
      });
    }
  
    handleCancel_template = (e) => {
      console.log(e);
      this.setState({
        templatevisible: false,
      });
    }
    handleChange = (checked) => {
      this.setState({ checked });
    }
    render() {
      
      const cardBasic_one = (
        <div>
          <Row gutter={16}>
            <Col span={8}>
                <Card
                  style={{ width:250 ,height:300}}
                  cover={
                    <img onClick={this.showModal}
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png" height="154"
                    />
                  }
                >
                  <Row>
                    <Col span={18}>
                    <Meta
                        title="React"
                        description="React 可以非常轻松地创建用户交互界面。"
                     />
                    </Col>
                  </Row>
                  <br />
                  <Row >
                    <Col span={4}>
                    <Link to='/APP'><IconFont type="icon-edit"/></Link>
                  </Col>
                    <Col span={8}><IconFont type="icon-xin"/></Col>
                    <Col span={12}><IconFont type="icon-icon-test"/><IconFont type="icon-icon-test2"/><IconFont type="icon-icon-test1"/><IconFont type="icon-icon-test-copy"/></Col>
                  </Row>
                </Card>
            </Col>
          </Row>
        </div>
      );
      const cardBasic_two = (
        <div>
          <Row gutter={16}>
            <Col span={8}>
                <Card
                  style={{ width:250 ,height:300}}
                  cover={
                    <img onClick={this.showModal}
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png" height="154"
                    />
                  }
                >
                  <Row>
                    <Col span={18}>
                    <Meta
                        title="React"
                        description="React 可以非常轻松地创建用户交互界面。"
                     />
                    </Col>
                  </Row>
                  <br />
                  <Row >
                    <Col span={4}>
                    <Link to='/APP'><IconFont type="icon-edit"/></Link>
                  </Col>
                    <Col span={8}><IconFont type="icon-xin"/></Col>
                    <Col span={12}><IconFont type="icon-icon-test"/><IconFont type="icon-icon-test2"/><IconFont type="icon-icon-test1"/><IconFont type="icon-icon-test-copy"/></Col>
                  </Row>
                </Card>
            </Col>
          </Row>
        </div>
      );
      const cardBasic_three = (
        <div>
          <Row gutter={16}>
            <Col span={8}>
                <Card
                  style={{ width:250 ,height:300}}
                  cover={
                    <img onClick={this.showModal}
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png" height="154"
                    />
                  }
                >
                  <Row>
                    <Col span={18}>
                    <Meta
                        title="React"
                        description="React 可以非常轻松地创建用户交互界面。"
                     />
                    </Col>
                  </Row>
                  <br />
                  <Row >
                    <Col span={4}>
                    <Link to='/APP'><IconFont type="icon-edit"/></Link>
                  </Col>
                    <Col span={8}><IconFont type="icon-xin"/></Col>
                    <Col span={12}><IconFont type="icon-icon-test"/><IconFont type="icon-icon-test2"/><IconFont type="icon-icon-test1"/><IconFont type="icon-icon-test-copy"/></Col>
                  </Row>
                </Card>
            </Col>
          </Row>
        </div>
      );
      const cardBasic_four = (
        <div>
          <Row gutter={16}>
            <Col span={8}>
                <Card
                  style={{ width:250 ,height:300}}
                  cover={
                    <img onClick={this.showModal}
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png" height="154"
                    />
                  }
                >
                  <Row>
                    <Col span={18}>
                    <Meta
                        title="React"
                        description="React 可以非常轻松地创建用户交互界面。"
                     />
                    </Col>
                  </Row>
                  <br />
                  <Row >
                    <Col span={4}>
                    <Link to='/APP'><IconFont type="icon-edit"/></Link>
                  </Col>
                    <Col span={8}><IconFont type="icon-xin"/></Col>
                    <Col span={12}><IconFont type="icon-icon-test"/><IconFont type="icon-icon-test2"/><IconFont type="icon-icon-test1"/><IconFont type="icon-icon-test-copy"/></Col>
                  </Row>
                </Card>
            </Col>
          </Row>
        </div>
      );
      const cardBasic_creat = (
        <div>
                <Card
                  className="cardparent"
                >
                  <Row className="cardself" >
                    <p style={{fontSize:'35px'}}><IconFont  onClick={this.showModal_template} type="icon-jia" /></p>
                    <p>创建新课件</p>
                  </Row>
                </Card>
        </div>
      );

      const cardList_viedo = (
        <div>
          <Row style={{ margin: '8px 8px 8px 0'}}>
            <Col span={6}>{cardBasic_one}</Col>
            <Col span={6}>{cardBasic_four}</Col>
            <Col span={6}>{cardBasic_two}</Col>
            <Col span={6}>{cardBasic_three}</Col> 
          </Row>
          <Row style={{ margin: '8px 8px 8px 0'}}>
            <Col span={6}>{cardBasic_two}</Col>
            <Col span={6}>{cardBasic_one}</Col>
            <Col span={6}>{cardBasic_three}</Col>
            <Col span={6}>{cardBasic_four}</Col> 
          </Row>
          <Row style={{ margin: '8px 8px 8px 0',textAlign: 'center' }}>
            <Pagination  defaultCurrent={1} total={500} />
            {/* <Pagination showQuickJumper defaultCurrent={1} total={500} /> */}
          </Row>
        </div>
      );
      const cardList_course = (
        <div>
          <Row style={{ margin: '8px 8px 8px 0'}}>
            <Col span={6}>{cardBasic_creat}</Col>
            <Col span={6}>{cardBasic_four}</Col>
            <Col span={6}>{cardBasic_two}</Col>
            <Col span={6}>{cardBasic_three}</Col> 
          </Row>
          <Row style={{ margin: '8px 8px 8px 0'}}>
            <Col span={6}>{cardBasic_two}</Col>
            <Col span={6}>{cardBasic_one}</Col>
            <Col span={6}>{cardBasic_three}</Col>
            <Col span={6}>{cardBasic_four}</Col> 
          </Row>
          <Row style={{ margin: '8px 8px 8px 0',textAlign: 'center' }}>
            <Pagination  defaultCurrent={1} total={500} />
            {/* <Pagination showQuickJumper defaultCurrent={1} total={500} /> */}
          </Row>
        </div>
      );
      const mycourse_ground=(
        <div style={{ margin: '8px 8px 8px 0'}}>
        <Card bordered={false}>
          <Form layout="inline" style={{ paddingBottom: 11 }}>
              <Row gutter={16}>
              <Col span={5}>                  
                  <Select defaultValue="1" onChange={handleChange} style={{width:'100%'}}>
                     <Option value="1">我创建的课件</Option>
                    <Option value="2"> 我收藏的课件</Option>
                 </Select>                  
                </Col>
                <Col span={5}>                  
                  <Select defaultValue="1" onChange={handleChange} style={{width:'100%'}}>
                     <Option value="1">按创建时间降序</Option>
                    <Option value="2"> 按创建时间升序</Option>
                    <Option value="3">按修改时间降序</Option>
                    <Option value="4"> 按修改时间升序</Option>
                 </Select>                  
                </Col>
                <Col span={5}>                  
                  <Select defaultValue="1" onChange={handleChange} style={{width:'100%'}}>
                     <Option value="1">语文</Option>
                    <Option value="2"> 数学</Option>
                    <Option value="3">英语</Option>
                    <Option value="4"> 物理</Option>
                    <Option value="5">化学</Option>
                    <Option value="6">生物</Option>
                 </Select>                  
                </Col>
              </Row>
          </Form>
        </Card>
        {cardList_course}
        </div>
      );

      const course_ground=(
        <div style={{ margin: '0px 0px 0px 0'}}>
        <Card bordered={false}>
          <Form >
              <FormItem label="K12教育"  {...formItemLayout}>
                    <MyTag>全部</MyTag>
                    <MyTag>语文</MyTag>
                    <MyTag>数学</MyTag>
                    <MyTag>英语</MyTag>
                    <MyTag>物理</MyTag>
                    <MyTag>化学</MyTag>
                    <MyTag>生物</MyTag>
                    <MyTag>政治</MyTag>
                    <MyTag>历史</MyTag>
                    <MyTag>体育</MyTag>
                    <MyTag>艺术</MyTag>
              </FormItem>
              <FormItem label="IT教育"  {...formItemLayout}>
                    <MyTag>全部</MyTag>
                    <MyTag>前端</MyTag>
                    <MyTag>小程序</MyTag>
                    <MyTag>区块链</MyTag>
                    <MyTag>人工智能</MyTag>
                    <MyTag>云计算</MyTag>
                    <MyTag>大数据</MyTag>
                    <MyTag>运维</MyTag>
                    <MyTag>测试</MyTag>
                    <MyTag>数据库</MyTag>
                    <MyTag>UI设计</MyTag>
              </FormItem>
              <FormItem label="百科知识" {...formItemLayout}>
                    <MyTag>全部</MyTag>
                    <MyTag>建筑</MyTag>
                    <MyTag>艺术</MyTag>
                    <MyTag>心理</MyTag>
                    <MyTag>宗教</MyTag>
                    <MyTag>医学健康</MyTag>
                    <MyTag>商业管理</MyTag>
                    <MyTag>经济</MyTag>
                    <MyTag>金融</MyTag>
                    <MyTag>法律</MyTag>
                    <MyTag>伦理</MyTag>
              </FormItem>
          </Form>
        </Card>
        {cardList_viedo}
        </div>
      );

      return (
        <Layout style={{height:'100%',width:'100%'}}>
        <Modal
          width="700px"
          title="选择模版"
          visible={this.state.templatevisible}
          onOk={this.handleOk_template}
          onCancel={this.handleCancel_template}
          footer={null}
        >
          <ChoseTemplate/>
        </Modal> 
        <Header className='top-navigation' style={{height:'8.2%'}}>
        {/* <div className="logo" /> */}
        <div className="search">
        <Input 
        size='large'
        placeholder="搜索课件标题"
        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
      />
     
        </div>
        <div className='flowbar-account'><span style={{padding:10}}>用户名</span>
        <Link to='/User'><Avatar style={{ backgroundColor:'#f56a00', verticalAlign: 'middle' }} size={50}>U</Avatar></Link>
        </div>
         
       
     
        </Header>
        <Modal
          title="是否重新编辑课件"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
        <p className="right">
           <Button key="return" onClick={this.handleCancel}>取消</Button>
           <Link to='/APP'><Button key="next" type="primary"> 确定 </Button></Link>
        </p>
        </Modal>
        <Card bordered={false}>
            <Tabs defaultActiveKey="mycourse" size="large">
              <TabPane tab="课件广场" key="courseground">
              {course_ground}
              </TabPane>
              <TabPane tab="我的课件" key="mycourse">
                {mycourse_ground}
              </TabPane>
            </Tabs>
          </Card>
       

        </Layout>
      );
    }
  }

  export default Account;