import React from 'react'

import { Layout, Space } from 'antd'

import styles from './index.module.less'

const { Footer } = Layout

export interface DataPrivacyBarProps {
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DataPrivacyBar = (props: DataPrivacyBarProps) => {
  const { onCheckboxChange } = props;

  return (
    <Footer className={styles.footer}>
      <Space className={styles.versionBar} size={[46, 0]}>
        <span><input type="checkbox" className={styles.input} onChange={onCheckboxChange}/>Accept data privacy policy, before using chatbot</span>
      </Space>
    </Footer>
  )
}

export default DataPrivacyBar
