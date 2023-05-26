import React from 'react';
import './index.css';
import { Button, Form, FormListFieldData, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { updateListeners } from '../../utils/updateListeners';
const FormList = Form.List;
const FormItem = Form.Item;


function Rules() {
    const onFinish = (values: Values) => {
        if (values.groups) updateListeners(values.groups)
    };

    // 一组规则
    const GroupItem = function ({ level1Field }: { level1Field: FormListFieldData }) {
        return (
            <FormList
                name={[level1Field.name, 'rules']}
                key={level1Field.key}
            // initialValue={[{ isListValue: true, },]}
            >
                {(
                    level2Fields = [{ name: 0, key: 0, fieldKey: 0 }],
                    { add, remove },
                    { errors }
                ) => {
                    return (
                        <div>
                            {level2Fields.map((level2Field, fIdx: number) => (
                                <Space key={'_' + level2Field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <FormItem name={[level2Field.name, 'key']} noStyle rules={[{ required: true, message: '必填' }]}>
                                        <Input placeholder="key" />
                                    </FormItem>
                                    <FormItem name={[level2Field.name, 'value']} rules={[{ required: true, message: '必填' }]} noStyle>
                                        <Input placeholder="value" />
                                    </FormItem>
                                    <MinusCircleOutlined onClick={() => remove(level2Field.name)} />
                                </Space>
                            ))}
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                添加
                            </Button>
                            <Form.ErrorList errors={errors} />
                        </div>
                    );
                }}
            </FormList>
        )
    }

    return (
        <div className="rules">
            <Form
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                autoComplete="off"
            >
                <FormList name={['groups']}>
                    {(level1Fields, { add, remove }, { errors }) => {
                        const level1Remove = remove;
                        return (
                            <div>
                                {level1Fields.map((level1Field, index) => (
                                    <div className='group' key={level1Field.key} >
                                        <div className='groupItem'>
                                            <div className="title">规则{index + 1}:</div>
                                            <FormItem name={[level1Field.name, 'url']} rules={[{ required: true, message: '必填' }]}>
                                                <Input placeholder="url" />
                                            </FormItem>
                                            <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                                <GroupItem level1Field={level1Field} />
                                            </Space>
                                        </div>
                                        <MinusCircleOutlined onClick={() => level1Remove(level1Field.name)} />
                                    </div>
                                ))}
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    添加规则
                                </Button>
                            </div>
                        );
                    }}
                </FormList>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Rules;
