import { a as __assign } from './Observable-063af883.js';
import './core-4c1f1367.js';
import { r as react } from './index-abdc4d2d.js';
import { T as Tooltip } from './Tooltip-bfc7063c.js';
import { g as getSafeId, c as css } from './Util-e30cbaf3.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Icon/FabricIcons.css */
function __snowpack__injectStyle(css) {
  const headEl = document.head || document.getElementsByTagName('head')[0];
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  if (styleEl.styleSheet) {
    styleEl.styleSheet.cssText = css;
  } else {
    styleEl.appendChild(document.createTextNode(css));
  }
  headEl.appendChild(styleEl);
}
__snowpack__injectStyle("@font-face {\n  font-family: \"AzureDevOpsMDL2Assets\";\n  src: url(\"./fonts/AzDevMDL2.woff\") format(\"woff\"); }\n\n.fabric-icon {\n  align-self: center;\n  display: inline-flex;\n  font-family: \"AzureDevOpsMDL2Assets\";\n  -webkit-font-smoothing: antialiased; }\n  .fabric-icon.small {\n    font-size: 0.75rem;\n    line-height: 0.75rem; }\n  .fabric-icon.medium {\n    font-size: 1rem;\n    line-height: 1rem; }\n  .fabric-icon.large {\n    font-size: 1.5rem;\n    line-height: 1.5rem; }\n\n/**\r\n * Adjustments to specific icon placements based on their default layout.\r\n */\n.ms-Icon--FabricFolder,\n.ms-Icon--FabricFolderFill {\n  transform: translateY(1px); }\n\n.ms-Icon--Tag {\n  transform: translateY(1px); }\n\n/**\r\n * Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license\r\n */\n.ms-Icon--Insights:before {\n  content: \"\\E3AF\"; }\n\n.ms-Icon--GlobalNavButton:before {\n  content: \"\\E700\"; }\n\n.ms-Icon--Airplane:before {\n  content: \"\\E709\"; }\n\n.ms-Icon--ChevronDown:before {\n  content: \"\\E70D\"; }\n\n.ms-Icon--ChevronUp:before {\n  content: \"\\E70E\"; }\n\n.ms-Icon--Edit:before {\n  content: \"\\E70F\"; }\n\n.ms-Icon--Add:before {\n  content: \"\\E710\"; }\n\n.ms-Icon--Cancel:before {\n  content: \"\\E711\"; }\n\n.ms-Icon--More:before {\n  content: \"\\E712\"; }\n\n.ms-Icon--Settings:before {\n  content: \"\\E713\"; }\n\n.ms-Icon--Video:before {\n  content: \"\\E714\"; }\n\n.ms-Icon--Mail:before {\n  content: \"\\E715\"; }\n\n.ms-Icon--People:before {\n  content: \"\\E716\"; }\n\n.ms-Icon--Phone:before {\n  content: \"\\E717\"; }\n\n.ms-Icon--Pin:before {\n  content: \"\\E718\"; }\n\n.ms-Icon--Shop:before {\n  content: \"\\E719\"; }\n\n.ms-Icon--Link:before {\n  content: \"\\E71B\"; }\n\n.ms-Icon--Filter:before {\n  content: \"\\E71C\"; }\n\n.ms-Icon--Zoom:before {\n  content: \"\\E71E\"; }\n\n.ms-Icon--ZoomOut:before {\n  content: \"\\E71F\"; }\n\n.ms-Icon--Search:before {\n  content: \"\\E721\"; }\n\n.ms-Icon--Attach:before {\n  content: \"\\E723\"; }\n\n.ms-Icon--Send:before {\n  content: \"\\E724\"; }\n\n.ms-Icon--FavoriteList:before {\n  content: \"\\E728\"; }\n\n.ms-Icon--Forward:before {\n  content: \"\\E72A\"; }\n\n.ms-Icon--Back:before {\n  content: \"\\E72B\"; }\n\n.ms-Icon--Refresh:before {\n  content: \"\\E72C\"; }\n\n.ms-Icon--Share:before {\n  content: \"\\E72D\"; }\n\n.ms-Icon--Lock:before {\n  content: \"\\E72E\"; }\n\n.ms-Icon--BlockedSite:before {\n  content: \"\\E72F\"; }\n\n.ms-Icon--ReportHacked:before {\n  content: \"\\E730\"; }\n\n.ms-Icon--EMI:before {\n  content: \"\\E731\"; }\n\n.ms-Icon--Blocked:before {\n  content: \"\\E733\"; }\n\n.ms-Icon--FavoriteStar:before {\n  content: \"\\E734\"; }\n\n.ms-Icon--FavoriteStarFill:before {\n  content: \"\\E735\"; }\n\n.ms-Icon--ReadingMode:before {\n  content: \"\\E736\"; }\n\n.ms-Icon--Remove:before {\n  content: \"\\E738\"; }\n\n.ms-Icon--CheckboxComposite:before {\n  content: \"\\E73A\"; }\n\n.ms-Icon--CheckboxCompositeReversed:before {\n  content: \"\\E73D\"; }\n\n.ms-Icon--CheckMark:before {\n  content: \"\\E73E\"; }\n\n.ms-Icon--BackToWindow:before {\n  content: \"\\E73F\"; }\n\n.ms-Icon--FullScreen:before {\n  content: \"\\E740\"; }\n\n.ms-Icon--Print:before {\n  content: \"\\E749\"; }\n\n.ms-Icon--Up:before {\n  content: \"\\E74A\"; }\n\n.ms-Icon--Down:before {\n  content: \"\\E74B\"; }\n\n.ms-Icon--OEM:before {\n  content: \"\\E74C\"; }\n\n.ms-Icon--Delete:before {\n  content: \"\\E74D\"; }\n\n.ms-Icon--Save:before {\n  content: \"\\E74E\"; }\n\n.ms-Icon--Flashlight:before {\n  content: \"\\E754\"; }\n\n.ms-Icon--Sad:before {\n  content: \"\\E757\"; }\n\n.ms-Icon--MultiSelect:before {\n  content: \"\\E762\"; }\n\n.ms-Icon--KeyboardClassic:before {\n  content: \"\\E765\"; }\n\n.ms-Icon--Play:before {\n  content: \"\\E768\"; }\n\n.ms-Icon--Pause:before {\n  content: \"\\E769\"; }\n\n.ms-Icon--ChevronLeft:before {\n  content: \"\\E76B\"; }\n\n.ms-Icon--ChevronRight:before {\n  content: \"\\E76C\"; }\n\n.ms-Icon--Emoji2:before {\n  content: \"\\E76E\"; }\n\n.ms-Icon--SearchAndApps:before {\n  content: \"\\E773\"; }\n\n.ms-Icon--Globe:before {\n  content: \"\\E774\"; }\n\n.ms-Icon--ContactInfo:before {\n  content: \"\\E779\"; }\n\n.ms-Icon--Unpin:before {\n  content: \"\\E77A\"; }\n\n.ms-Icon--Contact:before {\n  content: \"\\E77B\"; }\n\n.ms-Icon--Paste:before {\n  content: \"\\E77F\"; }\n\n.ms-Icon--WindowsLogo:before {\n  content: \"\\E782\"; }\n\n.ms-Icon--Error:before {\n  content: \"\\E783\"; }\n\n.ms-Icon--Unlock:before {\n  content: \"\\E785\"; }\n\n.ms-Icon--Calendar:before {\n  content: \"\\E787\"; }\n\n.ms-Icon--Megaphone:before {\n  content: \"\\E789\"; }\n\n.ms-Icon--Color:before {\n  content: \"\\E790\"; }\n\n.ms-Icon--SaveAs:before {\n  content: \"\\E792\"; }\n\n.ms-Icon--Undo:before {\n  content: \"\\E7A7\"; }\n\n.ms-Icon--RedEye:before {\n  content: \"\\E7B3\"; }\n\n.ms-Icon--Package:before {\n  content: \"\\E7B8\"; }\n\n.ms-Icon--Warning:before {\n  content: \"\\E7BA\"; }\n\n.ms-Icon--ShoppingCart:before {\n  content: \"\\E7BF\"; }\n\n.ms-Icon--Flag:before {\n  content: \"\\E7C1\"; }\n\n.ms-Icon--Page:before {\n  content: \"\\E7C3\"; }\n\n.ms-Icon--Car:before {\n  content: \"\\E804\"; }\n\n.ms-Icon--EatDrink:before {\n  content: \"\\E807\"; }\n\n.ms-Icon--Home:before {\n  content: \"\\E80F\"; }\n\n.ms-Icon--SwitcherStartEnd:before {\n  content: \"\\E810\"; }\n\n.ms-Icon--IncidentTriangle:before {\n  content: \"\\E814\"; }\n\n.ms-Icon--History:before {\n  content: \"\\E81C\"; }\n\n.ms-Icon--Work:before {\n  content: \"\\E821\"; }\n\n.ms-Icon--Recent:before {\n  content: \"\\E823\"; }\n\n.ms-Icon--LocationDot:before {\n  content: \"\\E827\"; }\n\n.ms-Icon--Dictionary:before {\n  content: \"\\E82D\"; }\n\n.ms-Icon--Pinned:before {\n  content: \"\\E840\"; }\n\n.ms-Icon--RevToggleKey:before {\n  content: \"\\E845\"; }\n\n.ms-Icon--View:before {\n  content: \"\\E890\"; }\n\n.ms-Icon--Previous:before {\n  content: \"\\E892\"; }\n\n.ms-Icon--Next:before {\n  content: \"\\E893\"; }\n\n.ms-Icon--Clear:before {\n  content: \"\\E894\"; }\n\n.ms-Icon--Download:before {\n  content: \"\\E896\"; }\n\n.ms-Icon--Help:before {\n  content: \"\\E897\"; }\n\n.ms-Icon--Upload:before {\n  content: \"\\E898\"; }\n\n.ms-Icon--Emoji:before {\n  content: \"\\E899\"; }\n\n.ms-Icon--ClosePane:before {\n  content: \"\\E89F\"; }\n\n.ms-Icon--OpenPane:before {\n  content: \"\\E8A0\"; }\n\n.ms-Icon--PreviewLink:before {\n  content: \"\\E8A1\"; }\n\n.ms-Icon--ZoomIn:before {\n  content: \"\\E8A3\"; }\n\n.ms-Icon--ViewAll:before {\n  content: \"\\E8A9\"; }\n\n.ms-Icon--Switch:before {\n  content: \"\\E8AB\"; }\n\n.ms-Icon--Rename:before {\n  content: \"\\E8AC\"; }\n\n.ms-Icon--Import:before {\n  content: \"\\E8B5\"; }\n\n.ms-Icon--Folder:before {\n  content: \"\\E8B7\"; }\n\n.ms-Icon--ChromeClose:before {\n  content: \"\\E8BB\"; }\n\n.ms-Icon--ShowResults:before {\n  content: \"\\E8BC\"; }\n\n.ms-Icon--PaymentCard:before {\n  content: \"\\E8C7\"; }\n\n.ms-Icon--Copy:before {\n  content: \"\\E8C8\"; }\n\n.ms-Icon--FontColor:before {\n  content: \"\\E8D3\"; }\n\n.ms-Icon--Permissions:before {\n  content: \"\\E8D7\"; }\n\n.ms-Icon--Italic:before {\n  content: \"\\E8DB\"; }\n\n.ms-Icon--Underline:before {\n  content: \"\\E8DC\"; }\n\n.ms-Icon--Bold:before {\n  content: \"\\E8DD\"; }\n\n.ms-Icon--Like:before {\n  content: \"\\E8E1\"; }\n\n.ms-Icon--FontSize:before {\n  content: \"\\E8E9\"; }\n\n.ms-Icon--Tag:before {\n  content: \"\\E8EC\"; }\n\n.ms-Icon--Library:before {\n  content: \"\\E8F1\"; }\n\n.ms-Icon--BlockContact:before {\n  content: \"\\E8F8\"; }\n\n.ms-Icon--AddFriend:before {\n  content: \"\\E8FA\"; }\n\n.ms-Icon--Accept:before {\n  content: \"\\E8FB\"; }\n\n.ms-Icon--BulletedList:before {\n  content: \"\\E8FD\"; }\n\n.ms-Icon--Preview:before {\n  content: \"\\E8FF\"; }\n\n.ms-Icon--Chat:before {\n  content: \"\\E901\"; }\n\n.ms-Icon--Group:before {\n  content: \"\\E902\"; }\n\n.ms-Icon--World:before {\n  content: \"\\E909\"; }\n\n.ms-Icon--Comment:before {\n  content: \"\\E90A\"; }\n\n.ms-Icon--Repair:before {\n  content: \"\\E90F\"; }\n\n.ms-Icon--Accounts:before {\n  content: \"\\E910\"; }\n\n.ms-Icon--Stopwatch:before {\n  content: \"\\E916\"; }\n\n.ms-Icon--Clock:before {\n  content: \"\\E917\"; }\n\n.ms-Icon--WorldClock:before {\n  content: \"\\E918\"; }\n\n.ms-Icon--Completed:before {\n  content: \"\\E930\"; }\n\n.ms-Icon--MiniExpand:before {\n  content: \"\\E93A\"; }\n\n.ms-Icon--Code:before {\n  content: \"\\E943\"; }\n\n.ms-Icon--Streaming:before {\n  content: \"\\E93E\"; }\n\n.ms-Icon--LightningBolt:before {\n  content: \"\\E945\"; }\n\n.ms-Icon--Info:before {\n  content: \"\\E946\"; }\n\n.ms-Icon--CalculatorAddition:before {\n  content: \"\\E948\"; }\n\n.ms-Icon--MediaStorageTower:before {\n  content: \"\\E965\"; }\n\n.ms-Icon--ChevronUpSmall:before {\n  content: \"\\E96D\"; }\n\n.ms-Icon--ChevronDownSmall:before {\n  content: \"\\E96E\"; }\n\n.ms-Icon--ChevronLeftSmall:before {\n  content: \"\\E96F\"; }\n\n.ms-Icon--ChevronRightSmall:before {\n  content: \"\\E970\"; }\n\n.ms-Icon--ChevronUpMed:before {\n  content: \"\\E971\"; }\n\n.ms-Icon--ChevronDownMed:before {\n  content: \"\\E972\"; }\n\n.ms-Icon--ChevronLeftMed:before {\n  content: \"\\E973\"; }\n\n.ms-Icon--ChevronRightMed:before {\n  content: \"\\E974\"; }\n\n.ms-Icon--PC1:before {\n  content: \"\\E977\"; }\n\n.ms-Icon--Reply:before {\n  content: \"\\E97A\"; }\n\n.ms-Icon--Chart:before {\n  content: \"\\E999\"; }\n\n.ms-Icon--LockSolid:before {\n  content: \"\\E9A2\"; }\n\n.ms-Icon--DashKey:before {\n  content: \"\\E9AE\"; }\n\n.ms-Icon--CloudWeather:before {\n  content: \"\\E9BE\"; }\n\n.ms-Icon--Cloudy:before {\n  content: \"\\E9BF\"; }\n\n.ms-Icon--Unknown:before {\n  content: \"\\E9CE\"; }\n\n.ms-Icon--SortLines:before {\n  content: \"\\E9D0\"; }\n\n.ms-Icon--Ribbon:before {\n  content: \"\\E9D1\"; }\n\n.ms-Icon--Assign:before {\n  content: \"\\E9D3\"; }\n\n.ms-Icon--FlowChart:before {\n  content: \"\\E9D4\"; }\n\n.ms-Icon--CheckList:before {\n  content: \"\\E9D5\"; }\n\n.ms-Icon--Diagnostic:before {\n  content: \"\\E9D9\"; }\n\n.ms-Icon--Equalizer:before {\n  content: \"\\E9E9\"; }\n\n.ms-Icon--Processing:before {\n  content: \"\\E9F5\"; }\n\n.ms-Icon--WorkFlow:before {\n  content: \"\\EA01\"; }\n\n.ms-Icon--Diamond2Solid:before {\n  content: \"\\EA0A\"; }\n\n.ms-Icon--Teamwork:before {\n  content: \"\\EA12\"; }\n\n.ms-Icon--PeopleAdd:before {\n  content: \"\\EA15\"; }\n\n.ms-Icon--DateTime2:before {\n  content: \"\\EA17\"; }\n\n.ms-Icon--Shield:before {\n  content: \"\\EA18\"; }\n\n.ms-Icon--PageAdd:before {\n  content: \"\\EA1A\"; }\n\n.ms-Icon--NumberedList:before {\n  content: \"\\EA1C\"; }\n\n.ms-Icon--PowerBILogo:before {\n  content: \"\\EA1E\"; }\n\n.ms-Icon--MusicInCollectionFill:before {\n  content: \"\\EA36\"; }\n\n.ms-Icon--List:before {\n  content: \"\\EA37\"; }\n\n.ms-Icon--ErrorBadge:before {\n  content: \"\\EA39\"; }\n\n.ms-Icon--CircleRing:before {\n  content: \"\\EA3A\"; }\n\n.ms-Icon--CircleFill:before {\n  content: \"\\EA3B\"; }\n\n.ms-Icon--Lightbulb:before {\n  content: \"\\EA80\"; }\n\n.ms-Icon--Puzzle:before {\n  content: \"\\EA86\"; }\n\n.ms-Icon--Ringer:before {\n  content: \"\\EA8F\"; }\n\n.ms-Icon--PDF:before {\n  content: \"\\EA90\"; }\n\n.ms-Icon--CirclePlus:before {\n  content: \"\\EAEE\"; }\n\n.ms-Icon--StockDown:before {\n  content: \"\\EB0F\"; }\n\n.ms-Icon--StockUp:before {\n  content: \"\\EB11\"; }\n\n.ms-Icon--MSNVideos:before {\n  content: \"\\EB1C\"; }\n\n.ms-Icon--Soccer:before {\n  content: \"\\EB21\"; }\n\n.ms-Icon--CollegeFootball:before {\n  content: \"\\EB26\"; }\n\n.ms-Icon--ProFootball:before {\n  content: \"\\EB27\"; }\n\n.ms-Icon--Snowflake:before {\n  content: \"\\EB46\"; }\n\n.ms-Icon--AirplaneSolid:before {\n  content: \"\\EB4C\"; }\n\n.ms-Icon--Heart:before {\n  content: \"\\EB51\"; }\n\n.ms-Icon--HeartFill:before {\n  content: \"\\EB52\"; }\n\n.ms-Icon--AzureLogo:before {\n  content: \"\\EB6A\"; }\n\n.ms-Icon--OfficeLogo:before {\n  content: \"\\EB6E\"; }\n\n.ms-Icon--SkypeLogo:before {\n  content: \"\\EB6F\"; }\n\n.ms-Icon--StatusErrorFull:before {\n  content: \"\\EB90\"; }\n\n.ms-Icon--Certificate:before {\n  content: \"\\EB95\"; }\n\n.ms-Icon--Rewind:before {\n  content: \"\\EB9E\"; }\n\n.ms-Icon--Photo2:before {\n  content: \"\\EB9F\"; }\n\n.ms-Icon--OpenSource:before {\n  content: \"\\EBC2\"; }\n\n.ms-Icon--Project:before {\n  content: \"\\EBC6\"; }\n\n.ms-Icon--CloudDownload:before {\n  content: \"\\EBD3\"; }\n\n.ms-Icon--CityNext:before {\n  content: \"\\EC06\"; }\n\n.ms-Icon--Documentation:before {\n  content: \"\\EC17\"; }\n\n.ms-Icon--Giftbox:before {\n  content: \"\\EC1F\"; }\n\n.ms-Icon--VisualStudioLogo:before {\n  content: \"\\EC22\"; }\n\n.ms-Icon--CompletedSolid:before {\n  content: \"\\EC61\"; }\n\n.ms-Icon--MicrosoftLogo:before {\n  content: \"\\EC6A\"; }\n\n.ms-Icon--CloudUpload:before {\n  content: \"\\EC8E\"; }\n\n.ms-Icon--ScrollUpDown:before {\n  content: \"\\EC8F\"; }\n\n.ms-Icon--Tiles:before {\n  content: \"\\ECA5\"; }\n\n.ms-Icon--Org:before {\n  content: \"\\ECA6\"; }\n\n.ms-Icon--PartyLeader:before {\n  content: \"\\ECA7\"; }\n\n.ms-Icon--AppIconDefault:before {\n  content: \"\\ECAA\"; }\n\n.ms-Icon--POI:before {\n  content: \"\\ECAF\"; }\n\n.ms-Icon--AddTo:before {\n  content: \"\\ECC8\"; }\n\n.ms-Icon--RadioBtnOff:before {\n  content: \"\\ECCA\"; }\n\n.ms-Icon--RadioBtnOn:before {\n  content: \"\\ECCB\"; }\n\n.ms-Icon--ExploreContent:before {\n  content: \"\\ECCD\"; }\n\n.ms-Icon--Embed:before {\n  content: \"\\ECCE\"; }\n\n.ms-Icon--Product:before {\n  content: \"\\ECDC\"; }\n\n.ms-Icon--ProgressLoopOuter:before {\n  content: \"\\ECDF\"; }\n\n.ms-Icon--Blocked2:before {\n  content: \"\\ECE4\"; }\n\n.ms-Icon--FangBody:before {\n  content: \"\\ECEB\"; }\n\n.ms-Icon--ChatInviteFriend:before {\n  content: \"\\ECFE\"; }\n\n.ms-Icon--Feedback:before {\n  content: \"\\ED15\"; }\n\n.ms-Icon--YammerLogo:before {\n  content: \"\\ED19\"; }\n\n.ms-Icon--AADLogo:before {\n  content: \"\\ED68\"; }\n\n.ms-Icon--AccessLogo:before {\n  content: \"\\ED69\"; }\n\n.ms-Icon--SecurityGroup:before {\n  content: \"\\ED85\"; }\n\n.ms-Icon--Table:before {\n  content: \"\\ED86\"; }\n\n.ms-Icon--Waffle:before {\n  content: \"\\ED89\"; }\n\n.ms-Icon--RemoveLink:before {\n  content: \"\\ED90\"; }\n\n.ms-Icon--EditNote:before {\n  content: \"\\ED9D\"; }\n\n.ms-Icon--DoubleChevronUp:before {\n  content: \"\\EDBD\"; }\n\n.ms-Icon--DoubleChevronLeft:before {\n  content: \"\\EDBE\"; }\n\n.ms-Icon--DoubleChevronRight:before {\n  content: \"\\EDBF\"; }\n\n.ms-Icon--Ascending:before {\n  content: \"\\EDC0\"; }\n\n.ms-Icon--Descending:before {\n  content: \"\\EDC1\"; }\n\n.ms-Icon--TextField:before {\n  content: \"\\EDC3\"; }\n\n.ms-Icon--Dynamics365Logo:before {\n  content: \"\\EDCC\"; }\n\n.ms-Icon--ClearFormatting:before {\n  content: \"\\EDDD\"; }\n\n.ms-Icon--Strikethrough:before {\n  content: \"\\EDE0\"; }\n\n.ms-Icon--Export:before {\n  content: \"\\EDE1\"; }\n\n.ms-Icon--ExportMirrored:before {\n  content: \"\\EDE2\"; }\n\n.ms-Icon--DoubleChevronDown:before {\n  content: \"\\EE04\"; }\n\n.ms-Icon--ReplyMirrored:before {\n  content: \"\\EE35\"; }\n\n.ms-Icon--AddGroup:before {\n  content: \"\\EE3D\"; }\n\n.ms-Icon--SortUp:before {\n  content: \"\\EE68\"; }\n\n.ms-Icon--SortDown:before {\n  content: \"\\EE69\"; }\n\n.ms-Icon--AwayStatus:before {\n  content: \"\\EE6A\"; }\n\n.ms-Icon--MyMoviesTV:before {\n  content: \"\\EE6C\"; }\n\n.ms-Icon--CPU:before {\n  content: \"\\EEA1\"; }\n\n.ms-Icon--ContactCard:before {\n  content: \"\\EEBD\"; }\n\n.ms-Icon--CustomList:before {\n  content: \"\\EEBE\"; }\n\n.ms-Icon--OfflineOneDriveParachute:before {\n  content: \"\\EEC8\"; }\n\n.ms-Icon--OfflineOneDriveParachuteDisabled:before {\n  content: \"\\EEC9\"; }\n\n.ms-Icon--TriangleSolidUp12:before {\n  content: \"\\EECC\"; }\n\n.ms-Icon--TriangleSolidDown12:before {\n  content: \"\\EECD\"; }\n\n.ms-Icon--TriangleSolidRight12:before {\n  content: \"\\EECF\"; }\n\n.ms-Icon--TriangleRight12:before {\n  content: \"\\EED3\"; }\n\n.ms-Icon--ArrowUpRight8:before {\n  content: \"\\EED4\"; }\n\n.ms-Icon--DocumentSet:before {\n  content: \"\\EED6\"; }\n\n.ms-Icon--ArrowDownRightMirrored8:before {\n  content: \"\\EEF0\"; }\n\n.ms-Icon--ViewAll2:before {\n  content: \"\\EF56\"; }\n\n.ms-Icon--PlayerSettings:before {\n  content: \"\\EF58\"; }\n\n.ms-Icon--ReceiptCheck:before {\n  content: \"\\EF5B\"; }\n\n.ms-Icon--EditStyle:before {\n  content: \"\\EF60\"; }\n\n.ms-Icon--Lifesaver:before {\n  content: \"\\EF62\"; }\n\n.ms-Icon--DocumentSearch:before {\n  content: \"\\EF6C\"; }\n\n.ms-Icon--ExcelDocument:before {\n  content: \"\\EF73\"; }\n\n.ms-Icon--Starburst:before {\n  content: \"\\EF78\"; }\n\n.ms-Icon--SkypeCircleCheck:before {\n  content: \"\\EF7D\"; }\n\n.ms-Icon--SkypeCircleMinus:before {\n  content: \"\\EF7F\"; }\n\n.ms-Icon--SkypeMinus:before {\n  content: \"\\EF82\"; }\n\n.ms-Icon--Hide2:before {\n  content: \"\\EF89\"; }\n\n.ms-Icon--ClearFilter:before {\n  content: \"\\EF8F\"; }\n\n.ms-Icon--TimeEntry:before {\n  content: \"\\EF95\"; }\n\n.ms-Icon--PageEdit:before {\n  content: \"\\EFB6\"; }\n\n.ms-Icon--PageArrowRight:before {\n  content: \"\\EFB8\"; }\n\n.ms-Icon--Database:before {\n  content: \"\\EFC7\"; }\n\n.ms-Icon--ConnectContacts:before {\n  content: \"\\EFD4\"; }\n\n.ms-Icon--ActivateOrders:before {\n  content: \"\\EFE0\"; }\n\n.ms-Icon--ZipFolder:before {\n  content: \"\\F012\"; }\n\n.ms-Icon--Configuration:before {\n  content: \"\\F01E\"; }\n\n.ms-Icon--TextDocument:before {\n  content: \"\\F029\"; }\n\n.ms-Icon--Script:before {\n  content: \"\\F03A\"; }\n\n.ms-Icon--ActivityFeed:before {\n  content: \"\\F056\"; }\n\n.ms-Icon--CaretSolidDown:before {\n  content: \"\\F08E\"; }\n\n.ms-Icon--FabricFolder:before {\n  content: \"\\F0A9\"; }\n\n.ms-Icon--FabricFolderFill:before {\n  content: \"\\F0AA\"; }\n\n.ms-Icon--FabricNewFolder:before {\n  content: \"\\F0AB\"; }\n\n.ms-Icon--PublishContent:before {\n  content: \"\\F0D4\"; }\n\n.ms-Icon--CannedChat:before {\n  content: \"\\F0F2\"; }\n\n.ms-Icon--SettingsApp:before {\n  content: \"\\F0FF\"; }\n\n.ms-Icon--FolderHorizontal:before {\n  content: \"\\F12B\"; }\n\n.ms-Icon--GiftboxOpen:before {\n  content: \"\\F133\"; }\n\n.ms-Icon--StatusCircleInner:before {\n  content: \"\\F137\"; }\n\n.ms-Icon--StatusCircleRing:before {\n  content: \"\\F138\"; }\n\n.ms-Icon--StatusCircleErrorX:before {\n  content: \"\\F13D\"; }\n\n.ms-Icon--StatusCircleCheckmark:before {\n  content: \"\\F13E\"; }\n\n.ms-Icon--InfoSolid:before {\n  content: \"\\F167\"; }\n\n.ms-Icon--ProgressRingDots:before {\n  content: \"\\F16A\"; }\n\n.ms-Icon--WordLogo:before {\n  content: \"\\F1E3\"; }\n\n.ms-Icon--ExcelLogo:before {\n  content: \"\\F1E5\"; }\n\n.ms-Icon--OneNoteLogo:before {\n  content: \"\\F1E7\"; }\n\n.ms-Icon--OutlookLogo:before {\n  content: \"\\F1E9\"; }\n\n.ms-Icon--PowerPointLogo:before {\n  content: \"\\F1EB\"; }\n\n.ms-Icon--ScheduleEventAction:before {\n  content: \"\\F1EF\"; }\n\n.ms-Icon--FlameSolid:before {\n  content: \"\\F1F3\"; }\n\n.ms-Icon--ServerProcesses:before {\n  content: \"\\F1FE\"; }\n\n.ms-Icon--Server:before {\n  content: \"\\F201\"; }\n\n.ms-Icon--SaveAll:before {\n  content: \"\\F203\"; }\n\n.ms-Icon--TwoKeys:before {\n  content: \"\\F229\"; }\n\n.ms-Icon--GridViewSmall:before {\n  content: \"\\F232\"; }\n\n.ms-Icon--ViewDashboard:before {\n  content: \"\\F246\"; }\n\n.ms-Icon--ViewList:before {\n  content: \"\\F247\"; }\n\n.ms-Icon--ViewListGroup:before {\n  content: \"\\F248\"; }\n\n.ms-Icon--ViewListTree:before {\n  content: \"\\F249\"; }\n\n.ms-Icon--TriggerAuto:before {\n  content: \"\\F24A\"; }\n\n.ms-Icon--TriggerUser:before {\n  content: \"\\F24B\"; }\n\n.ms-Icon--StackedBarChart:before {\n  content: \"\\F24D\"; }\n\n.ms-Icon--StackedLineChart:before {\n  content: \"\\F24E\"; }\n\n.ms-Icon--BuildQueue:before {\n  content: \"\\F24F\"; }\n\n.ms-Icon--BuildQueueNew:before {\n  content: \"\\F250\"; }\n\n.ms-Icon--UserFollowed:before {\n  content: \"\\F25C\"; }\n\n.ms-Icon--Clicked:before {\n  content: \"\\F268\"; }\n\n.ms-Icon--Signin:before {\n  content: \"\\F286\"; }\n\n.ms-Icon--CloneToDesktop:before {\n  content: \"\\F28C\"; }\n\n.ms-Icon--Build:before {\n  content: \"\\F28F\"; }\n\n.ms-Icon--BranchFork2:before {\n  content: \"\\F291\"; }\n\n.ms-Icon--BranchCommit:before {\n  content: \"\\F293\"; }\n\n.ms-Icon--BranchMerge:before {\n  content: \"\\F295\"; }\n\n.ms-Icon--BranchPullRequest:before {\n  content: \"\\F296\"; }\n\n.ms-Icon--BranchShelveset:before {\n  content: \"\\F298\"; }\n\n.ms-Icon--RawSource:before {\n  content: \"\\F299\"; }\n\n.ms-Icon--RowsGroup:before {\n  content: \"\\F29B\"; }\n\n.ms-Icon--Deploy:before {\n  content: \"\\F29D\"; }\n\n.ms-Icon--ServerEnviroment:before {\n  content: \"\\F29F\"; }\n\n.ms-Icon--VisioLogo:before {\n  content: \"\\F2A7\"; }\n\n.ms-Icon--Backlog:before {\n  content: \"\\F2AC\"; }\n\n.ms-Icon--TeamFavorite:before {\n  content: \"\\F2AD\"; }\n\n.ms-Icon--TaskGroup:before {\n  content: \"\\F2AE\"; }\n\n.ms-Icon--CommentAdd:before {\n  content: \"\\F2B3\"; }\n\n.ms-Icon--ShopServer:before {\n  content: \"\\F2B6\"; }\n\n.ms-Icon--QueryList:before {\n  content: \"\\F2B8\"; }\n\n.ms-Icon--StreamingOff:before {\n  content: \"\\F2BB\"; }\n\n.ms-Icon--MoreVertical:before {\n  content: \"\\F2BC\"; }\n\n.ms-Icon--ArrowTallUpRight:before {\n  content: \"\\F2BE\"; }\n\n.ms-Icon--RingerOff:before {\n  content: \"\\F2C5\"; }\n\n.ms-Icon--PlayResume:before {\n  content: \"\\F2C6\"; }\n\n.ms-Icon--Repo:before {\n  content: \"\\F2CB\"; }\n\n.ms-Icon--FolderQuery:before {\n  content: \"\\F2CD\"; }\n\n.ms-Icon--FolderList:before {\n  content: \"\\F2CE\"; }\n\n.ms-Icon--CirclePauseSolid:before {\n  content: \"\\F2D8\"; }\n\n.ms-Icon--CirclePause:before {\n  content: \"\\F2D9\"; }\n\n.ms-Icon--MSNVideosSolid:before {\n  content: \"\\F2DA\"; }\n\n.ms-Icon--CircleStopSolid:before {\n  content: \"\\F2DB\"; }\n\n.ms-Icon--CircleStop:before {\n  content: \"\\F2DC\"; }\n\n.ms-Icon--NavigateForward:before {\n  content: \"\\F2DF\"; }\n\n.ms-Icon--FileTemplate:before {\n  content: \"\\F2E6\"; }\n\n.ms-Icon--FileJAVA:before {\n  content: \"\\F2E8\"; }\n\n.ms-Icon--FileCSS:before {\n  content: \"\\F2EA\"; }\n\n.ms-Icon--FileSass:before {\n  content: \"\\F2EB\"; }\n\n.ms-Icon--FileHTML:before {\n  content: \"\\F2ED\"; }\n\n.ms-Icon--JavaScriptLanguage:before {\n  content: \"\\F2EE\"; }\n\n.ms-Icon--CSharpLanguage:before {\n  content: \"\\F2EF\"; }\n\n.ms-Icon--TypeScriptLanguage:before {\n  content: \"\\F2F7\"; }\n\n.ms-Icon--MarkDownLanguage:before {\n  content: \"\\F2FB\"; }\n\n.ms-Icon--PlugConnected:before {\n  content: \"\\F302\"; }\n\n.ms-Icon--PlugDisconnected:before {\n  content: \"\\F303\"; }\n\n.ms-Icon--UnlockSolid:before {\n  content: \"\\F304\"; }\n\n.ms-Icon--Variable:before {\n  content: \"\\F305\"; }\n\n.ms-Icon--FileBug:before {\n  content: \"\\F30D\"; }\n\n.ms-Icon--FileCode:before {\n  content: \"\\F30E\"; }\n\n.ms-Icon--FileImage:before {\n  content: \"\\F311\"; }\n\n.ms-Icon--AutoFillTemplate:before {\n  content: \"\\F313\"; }\n\n.ms-Icon--WorkItem:before {\n  content: \"\\F314\"; }\n\n.ms-Icon--FullHistory:before {\n  content: \"\\F31C\"; }\n\n.ms-Icon--TripleColumnEdit:before {\n  content: \"\\F323\"; }\n\n.ms-Icon--AlertSolid:before {\n  content: \"\\F331\"; }\n\n.ms-Icon--MegaphoneSolid:before {\n  content: \"\\F332\"; }\n\n.ms-Icon--TaskSolid:before {\n  content: \"\\F333\"; }\n\n.ms-Icon--CrownSolid:before {\n  content: \"\\F336\"; }\n\n.ms-Icon--Trophy2Solid:before {\n  content: \"\\F337\"; }\n\n.ms-Icon--QuickNoteSolid:before {\n  content: \"\\F338\"; }\n\n.ms-Icon--ConstructionConeSolid:before {\n  content: \"\\F339\"; }\n\n.ms-Icon--PageListSolid:before {\n  content: \"\\F33A\"; }\n\n.ms-Icon--StarburstSolid:before {\n  content: \"\\F33C\"; }\n\n.ms-Icon--ReadingModeSolid:before {\n  content: \"\\F33D\"; }\n\n.ms-Icon--ShieldSolid:before {\n  content: \"\\F340\"; }\n\n.ms-Icon--GiftBoxSolid:before {\n  content: \"\\F341\"; }\n\n.ms-Icon--RibbonSolid:before {\n  content: \"\\F345\"; }\n\n.ms-Icon--FinancialSolid:before {\n  content: \"\\F346\"; }\n\n.ms-Icon--HeadsetSolid:before {\n  content: \"\\F348\"; }\n\n.ms-Icon--PermissionsSolid:before {\n  content: \"\\F349\"; }\n\n.ms-Icon--ParkingSolid:before {\n  content: \"\\F34A\"; }\n\n.ms-Icon--DiamondSolid:before {\n  content: \"\\F34C\"; }\n\n.ms-Icon--AsteriskSolid:before {\n  content: \"\\F34D\"; }\n\n.ms-Icon--OfflineStorageSolid:before {\n  content: \"\\F34E\"; }\n\n.ms-Icon--BankSolid:before {\n  content: \"\\F34F\"; }\n\n.ms-Icon--DecisionSolid:before {\n  content: \"\\F350\"; }\n\n.ms-Icon--ParachuteSolid:before {\n  content: \"\\F352\"; }\n\n.ms-Icon--FiltersSolid:before {\n  content: \"\\F353\"; }\n\n.ms-Icon--ColorSolid:before {\n  content: \"\\F354\"; }\n\n.ms-Icon--ReviewSolid:before {\n  content: \"\\F355\"; }\n\n.ms-Icon--ReviewRequestSolid:before {\n  content: \"\\F356\"; }\n\n.ms-Icon--ReviewResponseSolid:before {\n  content: \"\\F358\"; }\n\n.ms-Icon--FeedbackRequestSolid:before {\n  content: \"\\F359\"; }\n\n.ms-Icon--FeedbackResponseSolid:before {\n  content: \"\\F35B\"; }\n\n.ms-Icon--NavigateExternalInline:before {\n  content: \"\\F35F\"; }\n\n.ms-Icon--PlanView:before {\n  content: \"\\F360\"; }\n\n.ms-Icon--EngineeringGroup:before {\n  content: \"\\F362\"; }\n\n.ms-Icon--ProjectCollection:before {\n  content: \"\\F363\"; }\n\n.ms-Icon--ChevronUnfold10:before {\n  content: \"\\F369\"; }\n\n.ms-Icon--ChevronFold10:before {\n  content: \"\\F36A\"; }\n\n.ms-Icon--VSTSLogo:before {\n  content: \"\\F381\"; }\n\n.ms-Icon--TestBeaker:before {\n  content: \"\\F3A5\"; }\n\n.ms-Icon--TestBeakerSolid:before {\n  content: \"\\F3A6\"; }\n\n.ms-Icon--TestAutoSolid:before {\n  content: \"\\F3A8\"; }\n\n.ms-Icon--TestPlan:before {\n  content: \"\\F3AB\"; }\n\n.ms-Icon--TestStep:before {\n  content: \"\\F3AC\"; }\n\n.ms-Icon--TestParameter:before {\n  content: \"\\F3AD\"; }\n\n.ms-Icon--TestSuite:before {\n  content: \"\\F3AE\"; }\n\n.ms-Icon--TestCase:before {\n  content: \"\\F3AF\"; }\n\n.ms-Icon--Sprint:before {\n  content: \"\\F3B0\"; }\n\n.ms-Icon--TriggerApproval:before {\n  content: \"\\F3B2\"; }\n\n.ms-Icon--Rocket:before {\n  content: \"\\F3B3\"; }\n\n.ms-Icon--AzureKeyVault:before {\n  content: \"\\F3B4\"; }\n\n.ms-Icon--LikeSolid:before {\n  content: \"\\F3BF\"; }\n\n.ms-Icon--CRMCustomerInsightsApp:before {\n  content: \"\\F3C8\"; }\n\n.ms-Icon--FilterSolid:before {\n  content: \"\\F412\"; }\n\n.ms-Icon--Inbox:before {\n  content: \"\\F41C\"; }\n\n.ms-Icon--NotExecuted:before {\n  content: \"\\F440\"; }\n\n.ms-Icon--NotImpactedSolid:before {\n  content: \"\\F441\"; }\n\n.ms-Icon--BacklogBoard:before {\n  content: \"\\F444\"; }\n\n.ms-Icon--IssueSolid:before {\n  content: \"\\F448\"; }\n\n.ms-Icon--DefectSolid:before {\n  content: \"\\F449\"; }\n\n.ms-Icon--LadybugSolid:before {\n  content: \"\\F44A\"; }\n\n.ms-Icon--NugetLogo:before {\n  content: \"\\F44C\"; }\n\n.ms-Icon--TFVCLogo:before {\n  content: \"\\F44D\"; }\n\n.ms-Icon--ProjectLogo32:before {\n  content: \"\\F47E\"; }\n\n.ms-Icon--WaffleOffice365:before {\n  content: \"\\F4E0\"; }\n\n.ms-Icon--FontColorA:before {\n  content: \"\\F4EC\"; }\n\n.ms-Icon--FontColorSwatch:before {\n  content: \"\\F4ED\"; }\n\n.ms-Icon--SemiboldWeight:before {\n  content: \"\\F4F0\"; }\n\n.ms-Icon--ChartSeries:before {\n  content: \"\\F513\"; }\n\n.ms-Icon--AlignJustify:before {\n  content: \"\\F51E\"; }\n\n.ms-Icon--BlockedSolid:before {\n  content: \"\\F531\"; }\n\n.ms-Icon--DownloadDocument:before {\n  content: \"\\F549\"; }\n\n.ms-Icon--WaitlistConfirm:before {\n  content: \"\\F550\"; }\n\n.ms-Icon--LaptopSecure:before {\n  content: \"\\F552\"; }\n\n.ms-Icon--EntryView:before {\n  content: \"\\F554\"; }\n\n.ms-Icon--AccountManagement:before {\n  content: \"\\F55C\"; }\n\n.ms-Icon--ExploreData:before {\n  content: \"\\F5B6\"; }\n\n.ms-Icon--BitbucketLogo32:before {\n  content: \"\\F5D2\"; }\n\n.ms-Icon--GradleLogo32:before {\n  content: \"\\F5D4\"; }\n\n.ms-Icon--PasteAsCode:before {\n  content: \"\\F5D6\"; }\n\n.ms-Icon--FileYML:before {\n  content: \"\\F5DA\"; }\n\n.ms-Icon--ClipboardSolid:before {\n  content: \"\\F5DC\"; }\n\n.ms-Icon--AnalyticsView:before {\n  content: \"\\F5F1\"; }\n\n.ms-Icon--Trending12:before {\n  content: \"\\F62D\"; }\n\n.ms-Icon--CircleShapeSolid:before {\n  content: \"\\F63C\"; }\n\n.ms-Icon--GitLogo:before {\n  content: \"\\F65D\"; }\n\n.ms-Icon--GitHubLogo:before {\n  content: \"\\F65E\"; }\n\n.ms-Icon--ApacheMavenLogo:before {\n  content: \"\\F65F\"; }\n\n.ms-Icon--NPMLogo:before {\n  content: \"\\F660\"; }\n\n.ms-Icon--GitFork:before {\n  content: \"\\F661\"; }\n\n.ms-Icon--SVNLogo:before {\n  content: \"\\F662\"; }\n\n.ms-Icon--JenkinsLogo:before {\n  content: \"\\F663\"; }\n\n.ms-Icon--ExternalGit:before {\n  content: \"\\F665\"; }\n\n.ms-Icon--QuadColumn:before {\n  content: \"\\F66F\"; }\n\n.ms-Icon--DictionaryRemove:before {\n  content: \"\\F69A\"; }\n\n.ms-Icon--UserRemove:before {\n  content: \"\\F69B\"; }\n\n.ms-Icon--OpenInNewTab:before {\n  content: \"\\F6AB\"; }\n\n.ms-Icon--VerifiedBrandSolid:before {\n  content: \"\\F6AD\"; }\n\n.ms-Icon--AuthenticatorApp:before {\n  content: \"\\F6B1\"; }\n\n.ms-Icon--BacklogList:before {\n  content: \"\\F6BF\"; }\n\n.ms-Icon--ButtonControl:before {\n  content: \"\\F6C0\"; }\n\n.ms-Icon--UserGauge:before {\n  content: \"\\F6ED\"; }\n\n.ms-Icon--PeopleSettings:before {\n  content: \"\\F72C\"; }\n\n.ms-Icon--Blocked2Solid:before {\n  content: \"\\F737\"; }\n\n.ms-Icon--BulletedListText:before {\n  content: \"\\F792\"; }\n\n.ms-Icon--BulletedListBullet:before {\n  content: \"\\F793\"; }\n\n.ms-Icon--NumberedListText:before {\n  content: \"\\F796\"; }\n\n.ms-Icon--NumberedListNumber:before {\n  content: \"\\F797\"; }\n\n.ms-Icon--RemoveLinkChain:before {\n  content: \"\\F79A\"; }\n\n.ms-Icon--RemoveLinkX:before {\n  content: \"\\F79B\"; }\n\n.ms-Icon--FabricTextHighlight:before {\n  content: \"\\F79C\"; }\n\n.ms-Icon--ClearFormattingA:before {\n  content: \"\\F79D\"; }\n\n.ms-Icon--ClearFormattingEraser:before {\n  content: \"\\F79E\"; }\n\n.ms-Icon--Photo2Fill:before {\n  content: \"\\F79F\"; }\n\n.ms-Icon--IncreaseIndentText:before {\n  content: \"\\F7A0\"; }\n\n.ms-Icon--IncreaseIndentArrow:before {\n  content: \"\\F7A1\"; }\n\n.ms-Icon--DecreaseIndentText:before {\n  content: \"\\F7A2\"; }\n\n.ms-Icon--DecreaseIndentArrow:before {\n  content: \"\\F7A3\"; }\n\n.ms-Icon--CheckListText:before {\n  content: \"\\F7A8\"; }\n\n.ms-Icon--CheckListCheck:before {\n  content: \"\\F7A9\"; }\n\n.ms-Icon--NumberSymbol:before {\n  content: \"\\F7AC\"; }\n\n.ms-Icon--VerifiedBrand:before {\n  content: \"\\F7BD\"; }\n\n.ms-Icon--ReleaseGate:before {\n  content: \"\\F7BE\"; }\n\n.ms-Icon--ReleaseGateCheck:before {\n  content: \"\\F7BF\"; }\n\n.ms-Icon--ReleaseGateError:before {\n  content: \"\\F7C0\"; }\n\n.ms-Icon--FabricTextHighlightComposite:before {\n  content: \"\\F7DA\"; }\n\n.ms-Icon--SkypeCircleSlash:before {\n  content: \"\\F825\"; }\n\n.ms-Icon--PythonLogoBlue:before {\n  content: \"\\F84D\"; }\n\n.ms-Icon--PythonLogoYellow:before {\n  content: \"\\F84E\"; }\n\n.ms-Icon--RustLanguageLogo:before {\n  content: \"\\F84F\"; }\n\n.ms-Icon--RubyGemsLogo:before {\n  content: \"\\F850\"; }\n\n.ms-Icon--AddReaction:before {\n  content: \"\\F85D\"; }\n\n.ms-Icon--DecreaseIndentLegacy:before {\n  content: \"\\E290\"; }\n\n.ms-Icon--IncreaseIndentLegacy:before {\n  content: \"\\E291\"; }\n\n.ms-Icon--SurveyQuestions:before {\n  content: \"\\F01B\"; }\n\n.ms-Icon--BranchCompare:before {\n  content: \"\\F294\"; }\n\n.ms-Icon--DiffInline:before {\n  content: \"\\F309\"; }\n\n.ms-Icon--DiffSideBySide:before {\n  content: \"\\F30A\"; }\n\n.ms-Icon--ImageDiff:before {\n  content: \"\\F30B\"; }\n\n.ms-Icon--GitGraph:before {\n  content: \"\\F2CA\"; }\n\n.ms-Icon--WordDocument:before {\n  content: \"\\EF71\"; }\n\n.ms-Icon--PowerPointDocument:before {\n  content: \"\\EF72\"; }\n\n.ms-Icon--PowerShell:before {\n  content: \"\\F1FD\"; }\n\n.ms-Icon--FilePDB:before {\n  content: \"\\F2E5\"; }\n\n.ms-Icon--FileSQL:before {\n  content: \"\\F2E7\"; }\n\n.ms-Icon--FileASPX:before {\n  content: \"\\F2E9\"; }\n\n.ms-Icon--FileSass:before {\n  content: \"\\F2EB\"; }\n\n.ms-Icon--FileLess:before {\n  content: \"\\F2EC\"; }\n\n.ms-Icon--CSharpLanguage:before {\n  content: \"\\F2EF\"; }\n\n.ms-Icon--VisualBasicLanguage:before {\n  content: \"\\F2F1\"; }\n\n.ms-Icon--CPlusPlusLanguage:before {\n  content: \"\\F2F3\"; }\n\n.ms-Icon--FSharpLanguage:before {\n  content: \"\\F2F5\"; }\n\n.ms-Icon--PythonLanguage:before {\n  content: \"\\F2F8\"; }\n\n.ms-Icon--CoffeeScript:before {\n  content: \"\\F2FA\"; }\n\n.ms-Icon--RowsChild:before {\n  content: \"\\F29C\"; }\n\n.ms-Icon--SemanticZoom:before {\n  content: \"\\E833\"; }\n\n.ms-Icon--FileTypeSolution:before {\n  content: \"\\F387\"; }\n\n.ms-Icon--FileYML:before {\n  content: \"\\F5DA\"; }\n\n.ms-Icon--Camera:before {\n  content: \"\\E722\"; }\n\n.ms-Icon--GripperResize:before {\n  content: \"\\E788\"; }\n\n.ms-Icon--UngroupList:before {\n  content: \"\\E61C\"; }\n");

function Icon(props) {
    if (props.render) {
        return props.render(props.className);
    }
    var iconWrapperProps = {
        id: getSafeId(props.id),
        key: props.key,
        onClick: props.onClick,
        onMouseDown: props.onMouseDown,
        onKeyDown: props.onKeyDown,
        role: props.role ? props.role : props.ariaLabel || props.ariaLabelledBy ? "img" : undefined,
        style: props.style,
        tabIndex: props.tabIndex,
        title: props.title
    };
    var iconClassName = css(props.className, "flex-noshrink", props.iconName && "fabric-icon", props.iconName && "ms-Icon--" + props.iconName, props.size);
    var ariaHidden = props.ariaHidden !== undefined ? props.ariaHidden : "true";
    var icon = props.ariaLabel || props.ariaLabelledBy || props.ariaExpanded !== undefined ? (react.createElement("span", __assign({ "aria-expanded": props.ariaExpanded, "aria-label": props.ariaLabel, "aria-labelledby": getSafeId(props.ariaLabelledBy), className: props.wrapperClass }, iconWrapperProps),
        react.createElement("span", { "aria-hidden": ariaHidden, className: iconClassName }))) : (react.createElement("span", __assign({ "aria-hidden": ariaHidden, className: iconClassName }, iconWrapperProps)));
    if (props.tooltipProps) {
        icon = react.createElement(Tooltip, __assign({}, props.tooltipProps), icon);
    }
    return icon;
}

/**
 * Note the default IconSize when a custom size is not specified matches
 * the standard body-m font or 0.875rem - 14px.
 */
var IconSize;
(function (IconSize) {
    /**
     * Inherit has the icon take on the current text size.
     */
    IconSize["inherit"] = "";
    /**
     * 1.5rem - 24px
     */
    IconSize["large"] = "large";
    /**
     * 1rem - 16px
     */
    IconSize["medium"] = "medium";
    /**
     * 0.75rem - 12px
     */
    IconSize["small"] = "small";
})(IconSize || (IconSize = {}));

export { Icon as I, IconSize as a };