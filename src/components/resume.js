import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw94OjqMOjukkF1EOn9cO3VUske1EwoWfkkA&usqp=CAU"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Kwee F. Wang </h2>
            <h4 style={{color: 'grey'}}>Programmer | Oracle Apps DBA</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Experienced, self-started Senior Oracle Applications Database Administrator with 
              Global DBA management experience who excels at system upgrades, platform refreshes 
              and life-and-shift projects.  Lead responsibility for New York Oracle Applications 
              Databases and managed additional local and global Oracle Databases with DBA team. 
              Mentored and trained junior database administrators.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(917) 828-7348</p>
            <h5>Email</h5>
            <p>kfwang12216@gmail.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={2001}
              endYear={2018}
              jobName="Senior Oracle Apps DBA              - Commerzbank AG"
              jobDescription="Upgraded the E-Business Suite (EBS) 12.1.3 to 12.2.6 including installed rapid install startCD, patched EBS applications stack, patched EBS technical stack and upgraded database
              Conducted and completed one week ahead of schedule on pilot testing for server migration from HP Tru64 to Linux X86 and Dec/VMS to Linux X86 including installation, upgrade, database cloning, configuration, backup and documentation
              Improved the End of Date (EOD) troubleshooting process by generated an application EOD process table on data issues with resolution
              Performed and completed the E-Business Suite database disaster recovery over 24 hour period in time for the opening of the next business day as the result of a missing mount point
              "
            />
            <Experience
              startYear={2000}
              endYear={2001}
              jobName="Senior Oracle Apps DBA              - Kozmo.com"
              jobDescription="Server migration, installation, upgrade, patch, configuration and documentation
              Implemented database and application security
              Database backup, restore, recovery, monitor, performance tuning, refresh and application cloning
              Application life cycle support and troubleshooting
              "
            />
            <Experience
              startYear={1984}
              endYear={2000}
              jobName="DBA, Data Analysts, Program Analyst, Software Developer - US Department of Commerce, Bureau of the Census  "
              jobDescription="Daily Applications DBA and System administrator duty – Backup, 
              storage management, refresh test database, application registration, installation, 
              applied patches, database and applications tuning. Led a team of 5 developers composed of 
              external consultants and internal staff, established design and development standards used 
              by all team members to ensure code reusability. Evaluated internal applications, checking 
              for efficiency of performance and effectiveness of coding, and then provided recommendations 
              on how to improve performance and functionality. Generated reports documenting income statistics
              which were presented to the 1985 Annual American Statistical Society."
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>
            <div className="Skill-text">
            <ul>
              <li>Web: Javascript, html/css, react, react-native, node.js, sequalize</li>
              <li> Oracle RDBMS: 12C, 11g, 10g, 9i, and 8i</li>
              <li> Oracle Financial Applications (EBS): 12i (12.2.6, 12.1.3), 11i (10, 9, 7 and 3), ADI v7, v6</li>
              <li> Oracle Financial Applications Modules: GL, AP, I-Expense, FX, INV, OE, PO</li>
              <li>Hardware: SUSE10 Linux 64, SUSE9 Linux 64, Red Hat Linux 5.5 to 5.10, 86_X64, Sun SPARC/Solaris 2.6, 
                  SunOS 5.10 Solaris 64, HP/DEC Alpha/Unix 4.0E, 5.0B, MS/Windows(7, 2000) </li>
            </ul>

            </div>
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Education</h2>
            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Queensborough Community College"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Education
              startYear={2018}
              endYear={2000}
              schoolName="Oracle Training"
              schoolDescription="Various Oracle classes including Oracle 9i, 10g, 11g, 12C New Feature for DBA, 9i Database Performance Tuning, Oracle Applications System Administrator Fundamentals."
            />
            <Education
              startYear={1979}
              endYear={1983}
              schoolName="SUNY at Stony Brook"
              schoolDescription="BS in Applied Math and Statistics"
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
