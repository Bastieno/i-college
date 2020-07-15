import React from 'react';
import { Tag, Popover, Alert } from 'antd';
import Box from '@components/common/box';

const SelectedGroup = ({ selectedItems, removeItem }) => (
  <Box mb={3}>
    <h4>Selected Students </h4>
    <Box p={3} bg="#f6f6f6">
      {
        selectedItems.length === 0 ? <Alert message="No students selected. Click the close button and select some students" type="warning" /> :
          <p>Number of students selected: {selectedItems.length}</p>
      }
      {
        selectedItems.map((item) => {
          const {
            key,
            fullName,
            matricNumber,
            departmentName,
            level,
          } = item;
          const sliceIndex = departmentName.indexOf('of') + 3;
          const transformedDeptName = departmentName.slice(sliceIndex);

          const getColor = (level: string, flag = true) => {
            switch (level) {
              case '100':
                return flag ? 'magenta' : '#E956A6';
              case '200':
                return flag ? 'red' : '#EB615B';
              case '300':
                return 'orange';
              case '400':
                return flag ? 'geekblue' : '#5669EE';
              case '500':
                return flag ? 'purple' : '#9B66DF';
              default:
                return flag ? 'green' : '#70CD42';
            }
          };
          const tagElem = (
            <Tag
              style={{
                padding: '6px',
                marginBottom: '8px',
              }}
              color={getColor(level)}
              className="item-tag"
              key={key}
              closable
              onClose={() => removeItem(item)}
            >
              {`${fullName}`}
            </Tag>
          );
          const popoverContent = (
            <div>
              <p><strong>Matric No:</strong> {matricNumber}</p>
              <p><strong>Department:</strong> {transformedDeptName}</p>
              <p><strong>Level:</strong> {level}</p>
            </div>
          );

          return (
            <Popover
              title={
                <span style={{ color: getColor(level, false), fontWeight: 600 }}>
                  {fullName}
                </span>
              }
              key={key}
              content={popoverContent}
            >
              {tagElem}
            </Popover>
          );
        })
      }
    </Box>
  </Box>
);

export default SelectedGroup;
