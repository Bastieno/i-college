import {
  Collapse,
  Checkbox,
  Button,
  Divider,
} from 'antd';
import Box from '@components/common/box';

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const StudentRegSetting = () => {
  return (
    <Box mb={4}>
      <h3 style={{
        border: '1px solid #DDDDDD',
        padding: '8px',
      }}>Students and Registration</h3>
      <Collapse accordion>
        <Panel header="Generate QR Code for the registration of students" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="What information should be compulsory for student registration?" key="2">
          <Box mt={3} mb={1}>
            <p style={{ marginBottom: '20px' }}>
              <Checkbox
              >
                I want the student’s <strong>Phone Number</strong>
                to be compulsory when a student is registering
              </Checkbox>
            </p>
            <p style={{ marginBottom: '20px' }}>
              <Checkbox
              >
                I want the student’s<strong>Email Address</strong>
                to be compulsory when a student is registering
              </Checkbox>
            </p>
            <Divider />
            <div>
              <Button
                type="primary"
                size="small"
                onClick={() => console.log('Button clicked :>> ')}
              >
                Save
              </Button>
            </div>
          </Box>
        </Panel>
      </Collapse>
    </Box>
  );
};

export default StudentRegSetting;
