import { Select, Form } from 'antd';
import Box from '@components/common/box';
import { capitalizeWord } from '../../../utils/formatters';

const { Option } = Select;

type MySelectProps = {
  label: string,
  optionsArray: { value: string, text: string }[],
};

export default ({ label, optionsArray }: MySelectProps) => {
  const onChange = (value: any) => console.log(`selected ${value}`);
  const onBlur = (value: any) => console.log('blur');
  const onFocus = (value: any) => console.log('focus');
  const onSearch = (value: any) => console.log('search:', value);

  const options = optionsArray.map(
    ({ value, text }) => (<Option key={value} value={value}> {text} </Option>),
  );

  return (
    <Box mb={2}>
      <Form.Item label={`Select ${label}`}>
        <Select
          size="middle"
          showSearch
          style={{ width: '100%' }}
          placeholder={`Select ${capitalizeWord(label)}`}
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {options}
        </Select>
      </Form.Item>
    </Box>
  );
};
