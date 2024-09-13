import { Button, Collapse, Form, InputNumber, Space, Tooltip } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { InfoCircleOutlined } from '@ant-design/icons';
import type { SprintHistory } from '../../types';
import type { FC } from 'react';
import styles from './StoryPointsPerSprintForm.module.scss';

interface StoryPointsPerSprintFormProps {
  defaultValues: SprintHistory[];
  onValuesChange: (values: SprintHistory[]) => void;
}

export const StoryPointsPerSprintForm: FC<StoryPointsPerSprintFormProps> = ({
  defaultValues,
  onValuesChange,
}) => (
  <Form
    initialValues={{ sprintData: defaultValues }}
    onValuesChange={(_, allValues) => onValuesChange(allValues.sprintData)}
  >
    <Form.List name="sprintData">
      {(fields, { add, remove }) => (
        <Collapse
          items={[
            {
              label: 'Sprint history. Completed SP / Days per week',
              extra: (
                <Tooltip title="This information is used to calculate the team's capacity in days.">
                  <InfoCircleOutlined />
                </Tooltip>
              ),
              children: (
                <>
                  {!!fields.length && (
                    <div className={styles.wrapper}>
                      {fields.map(({ key, name, ...restField }) => (
                        <div key={key}>
                          <Space.Compact className={styles.item}>
                            <Form.Item
                              noStyle
                              {...restField}
                              name={[name, 'completedStoryPoints']}
                              rules={[
                                {
                                  required: true,
                                  message: 'Missing story points',
                                },
                              ]}
                            >
                              <InputNumber min={0} max={99} placeholder="SP" />
                            </Form.Item>
                            <Form.Item
                              noStyle
                              {...restField}
                              name={[name, 'sprintDays']}
                              rules={[
                                {
                                  required: true,
                                  message: 'Missing sprint days',
                                },
                              ]}
                            >
                              <InputNumber
                                min={0}
                                max={99}
                                placeholder="Days"
                              />
                            </Form.Item>
                          </Space.Compact>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </div>
                      ))}
                    </div>
                  )}
                  <Button
                    type="dashed"
                    onClick={() =>
                      add({ completedStoryPoints: 14, sprintDays: 14 })
                    }
                    icon={<PlusOutlined />}
                  >
                    Add Sprint History
                  </Button>
                </>
              ),
            },
          ]}
        />
      )}
    </Form.List>
  </Form>
);
