import React from 'react';
import { Tag, Input } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
import Box from '@components/Box';

type EditableTagGroupProps = {
  tagCategory: string,
};

class EditableTagGroup extends React.Component<EditableTagGroupProps> {
  state = {
    tags: [],
    inputVisible: false,
    inputValue: '',
  };

  input;

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = e => this.setState({ inputValue: e.target.value });

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => (this.input = input);

  forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          this.handleClose(tag);
        }}
        style={{ marginBottom: '8px' }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const { tagCategory } = this.props;
    const tagChild = tags.map(this.forMap);

    return (
      <Box mb={4}>
        {tags.length > 0 && <h1> {`List of ${tagCategory} Names`} </h1>}
        <div style={{
          marginBottom: 16,
          background: 'lightgray',
          padding: tags.length === 0 ? '0px' : '8px',
          minHeight: tags.length === 0 ? '0px' : '100px',
        }}
        >
          <TweenOneGroup
            enter={{
              scale: 0.8,
              opacity: 0,
              type: 'from',
              duration: 100,
              onComplete: (e) => {
                console.log(e.target.style);
              },
            }}
            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
            appear={false}
          >
            {tagChild}
          </TweenOneGroup>
        </div>
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="middle"
            style={{ width: '200px' }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} style={{ padding: '8px', fontSize: '13.5px' }}>
            <PlusOutlined /> Enter New {tagCategory}
          </Tag>
        )}
      </Box>
    );
  }
}

export default EditableTagGroup;
