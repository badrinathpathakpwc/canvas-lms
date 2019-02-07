/*
 * Copyright (C) 2019 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import {string} from 'prop-types'
import {Query} from 'react-apollo'
import Spinner from '@instructure/ui-elements/lib/components/Spinner'
import View from '@instructure/ui-layout/lib/components/View'

import I18n from 'i18n!assignments_2'

import {TEACHER_QUERY} from '../assignmentData'
import TeacherView from './TeacherView'

TeacherQuery.propTypes = {
  assignmentLid: string
}

export default function TeacherQuery({assignmentLid}) {
  return (
    <Query query={TEACHER_QUERY} variables={{assignmentLid}}>
      {({loading, error, data: {assignment}}) => {
        if (loading) {
          return (
            <View as="div" textAlign="center" padding="large 0">
              <Spinner size="large" title={I18n.t('Loading...')} />
            </View>
          )
        } else if (error) {
          return <pre>Error: {JSON.stringify(error, null, 2)}</pre>
        }
        return <TeacherView assignment={assignment} />
      }}
    </Query>
  )
}
