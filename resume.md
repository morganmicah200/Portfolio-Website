Micah Morgan
                                 501-314-8502                                            micahmorgan212@gmail.com
 https://github.com/morganmicah200        https://www.linkedin.com/in/micahmorgan-da/
EDUCATION
The University of Central Arkansas, Conway, Arkansas
Bachelor of Business Administration	

                                        Aug 2021 - May 2025
•	Major: Computer Information Systems
•	Minor: Computer Science	                                                 
Technical Skills

Languages: Python | SQL | Bash | C++
Data & Databases: PostgreSQL | MySQL | Snowflake | dbt | pandas | SQLAlchemy | PyArrow | aiohttp
Cloud & Tools: AWS S3 | Docker | Apache Airflow | Power BI | Excel | Git | Linux/Unix | REST APIs | asyncio

Projects
TMDB Movie Data Pipeline:
•	Async ETL pipeline extracting 1M+ movies from TMDB API via concurrent batching requests (aiohttp, asyncio, 50-thread semaphore); staged through medallion architecture on AWS S3, bulk loaded into Snowflake
•	Modeled star schema in dbt (1 fact, 4 dims); orchestrated by an Airflow DAG containerized with Docker, with S3 checkpointing for fault-tolerant extraction across 1.1M movie IDs
•	Validated with 28 pytest + 14 dbt tests | Python, AWS S3, Snowflake, dbt, Airflow, Docker, PyArrow, pandas

Medicare Analytics Pipeline: 
•	Ingested 9.66M CMS Medicare claim records into a PostgreSQL data warehouse via bulk COPY INTO for optimized load performance
•	Designed a Kimball-style star schema in dbt with fact and dimension tables for efficient analytics
•	Developed a Power BI dashboard delivering state-level insights — providers bill ~4x Medicare reimbursement; Alaska #1 at $101/service
•	Validated with 22 pytest tests | Python, PostgreSQL, dbt, Power BI, pandas, psycopg2

S&P 500 Market Analytics:
•	Built an ETL pipeline using REST APIS ingesting S&P 500 market data (Alpha Vantage) and macroeconomic indicators (FRED API)
•	Financial analysis including 50-day MAs, 30-day rolling volatility, and Pearson correlation — across 1000 observations, strong macro-market relationships emerged (CPI: +0.9998, Fed Funds Rate: −0.9073, Unemployment: −0.9907)
•	Python, MySQL, SQLAlchemy, pandas


Work Experience
  
Walmart Customer Service Associate 2022 – 2026

TaxPro  Software Support Analyst  
June 2025 – November 2025
●	Queried MySQL databases to generate client-facing reports, supporting data analysis and troubleshooting for software support cases.
●	Delivered data-focused presentations—utilizing Excel—to elected county Tax Collectors at the 2025 User’s Conference.
●	Developed a Positive Pay export-file system capable of distinguishing between tab-delimited, comma-delimited, and fixed-length formats using the organization’s proprietary web toolkit
●	Developed automation scripts in Bash using tools like grep, awk, and cron jobs to streamline routine data-processing tasks and improve workflow efficiency.
