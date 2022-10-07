export default [
    {
        type: "Library",
        name: "jQuery",
        cves: [
            { name: "CVE-2020-11022 (6.1)", version: ">=1.5.1 <3.5.0", info: "" },
            { name: "CVE-2020-11023 (6.1)", version: ">=1.5.1 | <3.5.0", info: "" },
            { name: "CVE-2019-11358 (6.1)", version: "<3.4.0", info: "used in Drupal, Backdrop CMS, and other products" },
        ],
        info_end: "https://endoflife.date/jquery",
        support: "No soportado: 1.x | 2.x"
    },
    {
        type: "Library",
        name: "jQuery UI",
        cves: [
            { name: "CVE-2016-7103 (6.1)", version: "<1.12.0", info: "XSS" },
            { name: "CVE-2021-41184 (6.1)", version: "<1.13.0", info: "XSS" },
            { name: "CVE-2021-41183 (6.1)", version: "<1.13.0", info: "" },
            { name: "CVE-2021-41182 (6.1)", version: "<1.13.0", info: "" },
        ],
        info_end: "",
        support: "No soportado: =< 1.12.1"
    },
    {
        type: "Library",
        name: "Bootstrap",
        cves: [
            { name: "CVE-2018-14041 (6.1)", version: "<4.1.2", info: "XSS" },
            { name: "CVE-2018-20676 (6.1)", version: "<3.4.0", info: "XSS" },
            { name: "CVE-2018-20677 (6.1)", version: "<3.4.0", info: "XSS" },
            { name: "CVE-2019-8331 (6.1)", version: "<3.4.1 | 4.3.X | <4.3.1", info: "XSS" },
            
        ],
        info_end: "https://endoflife.date/bootstrap",
        support: "No soportado: =< 3.X"
    },
    {
        type: "Software",
        name: "Nginx",
        cves: [
            { name: "CVE-2021-23017 (7.7)", version: "=>0.6.18 | =<1.20.0", info: "" },
            { name: "CVE-2019-9511 (7.5)", version: "=>1.9.5 | =<1.17.2", info: "" },
            { name: "CVE-2019-9513 (7.5)", version: "=>1.9.5 | =<1.17.2", info: "" },
            { name: "CVE-2019-8331 (6.1)", version: "=>1.1.3 | =<1.15.5 | =>1.0.7 | =<1.0.15", info: "" },
            
        ],
        info_end: "https://endoflife.date/nginx",
        web_info: "http://nginx.org/en/security_advisories.html",
        support: "No soportado: =< 1.21.X",
    },
    {
        type: "Software",
        name: "OpenSSH",
        cves: [
            { name: "CVE-2021-41617 (5.9)", version: "6.2 | 8.x | <8.8", info: "" },
            { name: "CVE-2020-14145 (5.9)", version: " => 5.7 | <8.4", info: "MiM" },
            { name: "CVE-2018-20685 (5.3)", version: "<7.9", info: "" },
            { name: "CVE-2019-6111 (5.9)", version: "<7.9", info: "" },
            { name: "CVE-2017-15906 (5.3)", version: "<7.6", info: "Zero-length files" },  
            { name: "CVE-2016-10708 (7.5)", version: "<7.4", info: "DoS" },
            { name: "CVE-2016-6515 (7.5)", version: "<7.3", info: "DoS" }, 
            { name: "CVE-2015-8325 (7.8)", version: "<7.2", info: "Gain privileges" },         
            { name: "CVE-2014-2532 (4.9)", version: "<6.6", info: "" },
            { name: "CVE-2014-1692 (7.5)", version: "<6.4", info: "CVSS 2.0" },  
        ],
        info_end: "",
        support: "Desactualizado: =< 8.8",
    },
    {
        type: "Software",
        name: "Microsoft IIS",
        cves: [
            { name: "CVE-2010-2730 (9.3)", version: "7.5", info: "CVSS 2.0" },
            { name: "CVE-2010-1256 (8.5)", version: "6.0 | 7.0 | 7.5", info: "CVSS 2.0" },
            { name: "CVE-2010-3972 (10)", version: "7.0 | 7.5", info: "CVSS 2.0" },          
            
        ],
        info_end: "https://docs.microsoft.com/en-us/lifecycle/products/internet-information-services-iis",
        support: "No soportado: =< 7.5",
    },
    {
        type: "Software",
        name: "Microsoft SQL Server",
        cves: [
            { name: "CVE-2017-8516 (7.5)", version: "2012, 2014, 2016", info: "info disc" },
            { name: "CVE-2015-1763 (8.5)", version: "SQL Server 2008 SP3 SP4 | 2008 R2 SP2 SP3 | 2012 SP1 SP2| 2014", info: "CVSS 2.0" },
            { name: "CVE-2015-1762 (7.1)", version: "SQL Server 2008 SP3 SP4 | 2008 R2 SP2 SP3 | 2012 SP1 SP2| 2014", info: "CVSS 2.0" },
            { name: "CVE-2015-1761 (6.5)", version: "SQL Server 2008 SP3 SP4 | 2008 R2 SP2 SP3 | 2012 SP1 SP2| 2014", info: "CVSS 2.0" },
            { name: "CVE-2008-0085 (5.0)", version: "SQL Server 7.0 SP4 | 2000 SP4 | 2005 SP1 SP2 ", info: "CVSS 2.0" },
            { name: "CVE-2008-0086 (9.0)", version: "SQL Server 2000 SP4", info: "CVSS 2.0 | buffer overflow" },
            { name: "CVE-2008-0107 (9.0)", version: "SQL Server 7.0 SP4 | 2000 SP4 | 2005 SP1 SP2 ", info: "CVSS 2.0" },                  
            
        ],
        info_end: "https://docs.microsoft.com/en-us/sql/sql-server/end-of-support/sql-server-end-of-support-overview?view=sql-server-ver16",
        support: "No soportado: =< SQL Server 2008",
    },
    {
        type: "Software",
        name: "SMB",
        cves: [
            { name: "CVE-2020-1301 (8.8)", version: "SMB v1", info: "code exec" },
            { name: "CVE-2017-0269 (5.9)", version: "SMB v1", info: "DoS" }                  
            
        ],
        info_end: "",
        support: "No soportado: SMBv1",
    },
    {
        type: "Software",
        name: "JBOSS EAP",
        cves: [
            { name: "CVE-2020-12303 (4.6)", version: "JBOSS ", info: "CVSS 2.0" },
            { name: "CVE-2012-0874 (6.8)", version: "JBOSS < 5.2.0 ", info: "CVSS 2.0 | code exec" },
            { name: "CVE-2011-2941 (5.8)", version: "JBOSS < 5.2.0 ", info: "CVSS 2.0" },                  
            
        ],
        info_end: "https://access.redhat.com/support/policy/updates/jboss_notes#p_eap",
        support: "No soportado: =< JBOSS 4",
    },
    {
        type: "Software",
        name: "Jetty",
        cves: [
            { name: "CVE-2019-10247 (5.3)", version: "Jetty 7.X | Jetty 8.X | Jetty < 9.2.27 | Jetty < 9.3.26 | Jetty < 9.4.16", info: "" },                       
            
        ],
        info_end: "https://www.eclipse.org/jetty/download.php",
        support: "No soportado: =< Jetty 9.4",
    },
    {
        type: "Software",
        name: "MySQL",
        cves: [
            { name: "CVE-2020-2627 (6.5)", version: " < 8.0.18 ", info: "" }, 
            { name: "CVE-2020-2576 (6.5)", version: "MySQL 8.5.4 ", info: "" }, 
            { name: "CVE-2020-2686 (6.5)", version: " < 8.0.18 ", info: "" },
            { name: "CVE-2017-10276 (6.5)", version: " <=5.6.37 | <5.7.19 ", info: "" },                       
            
        ],
        info_end: "https://docs.microsoft.com/en-us/azure/mysql/concepts-version-policy",
        support: "No soportado: =< MySQL 5.6",
    },
    {
        type: "Software",
        name: "Angular",
        cves: [
            { name: "CVE-2022-25869 (6.1)", version: " * ", info: "XSS" }, 
            { name: "CVE-2022-25844 (7.5)", version: " > 1.7.0 ", info: "DoS" },                
            
        ],
        info_end: "https://endoflife.date/angular",
        support: "No soportado: =< 11",
    },
    {
        type: "Software",
        name: "gSOAP",
        cves: [
            { name: "CVE-2019-7659 (8.1)", version: "=>2.7.* | <2.8.75 ", info: "DoS" }, 
                
            
        ],
        info_end: "https://endoflife.date/angular",
        support: "No soportado: =< 11",
    },
    {
        type: "Library",
        name: "Moment.js",
        cves: [
            { name: "CVE-2022-31129 (7.5)", version: " >= 2.18.0  | < 2.29.4 ", info: "Regex DoS" }, 
            { name: "CVE-2022-24785 (7.5)", version: " < 2.29.2 ", info: "Directory traversal" },       
            { name: "CVE-2017-18214 (7.5)", version: " < 2.19.3 ", info: "Regex DoS" },
            { name: "CVE-2016-4055 (6.5)", version: " < 2.11.2 ", info: "Regex DoS" },              
            
        ],
        info_end: "",
        support: "No soportado: =< 2.29.3",
    },
    

]