import React from 'react'
export default () => (
    <div>
        <h4>omodule 树状结构</h4>

            <a href="#counter-parent-a">
                <h4>跳转到counter-parent-a</h4>
            </a>

        <p>
            <a href="#counter-parent-a/counter-child-a">
                跳转到 counter-parent-a 下的「子模块」counter-child-a
            </a>
        </p>
        <p>
            <a href="#counter-parent-a/counter-child-b">
                跳转到 counter-parent-a 下的「子模块」counter-child-b
            </a>
        </p>

            <a href="#counter-parent-b">
                <h4>跳转到counter-parent-b</h4>
            </a>
        
        <p>
            <a href="#counter-parent-b/counter-child-a">
                跳转到 counter-parent-b 下的「子模块」counter-child-a
            </a>
        </p>
        <p>
            <a href="#counter-parent-b/counter-child-b">
                跳转到 counter-parent-b 下的「子模块」counter-child-b
            </a>
        </p>
    </div>
)
