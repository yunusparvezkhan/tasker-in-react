# tasker-in-react
A lab project for understanding the latests of Reduxjs

## The Project
This app contains a list of tasks in the landing page, which can be created through the task creator form that is given below in the page.

### Diagram
 <img src="./src/media/mockup.png"/>


 ### Component Hiararchy
 <img src="./src/media/component-flow.png"/>



# Standard Commit Notations
### On Version Release

`Version [Version number] Release`

### On Patch/fix/changes (minor/major)


`Patch [Version index].[patch index]`

### Development Phase commits


`v[version number that is currently being developed] Delta [index of major changes, ie. Component additions].[index of small changes following the major change].`

`Example`  => `v4 Delta 1.8`

 This Commit title represents that Version 4 is in Development right now, and in the development process so far, one major change have been commited and follwing that change 8 small changes have been commited.


 Following any update, if any very minor change is commited, such as spelling mistakes or something mistekenly forgotten, then that commit might have a index following a . (dot) after the version number.

`Example` => `v4 Delta 2.1.1`

 This commit suggests that some very small change is commited following the  `v4 Delta 2.1`  commit.

### On Devnotes update

`v[version under development] echo mic [index of devnotes update]`

`Example` => `v4 echo mic 1`

This Commit title repressents that while Version 4 of the app is in Development phase, devnotes is updated for some announcement/notification and the index of such announcement/notification is 1.

### On Readme.md update

`Readme update v[version currently under development] n[index of readme update] ` => **Used Currently**

Previously this type of commits are done as 

`README update v[version currently under development] #[index of readme update] `

Note:- The first Notation is used currently

then as the extended description 

`some description`